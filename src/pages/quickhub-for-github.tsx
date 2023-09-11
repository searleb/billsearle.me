import { Img } from "components/Img";
import Layout from "components/Layout";
import { Link } from "components/Link";
import PageHead from "components/PageHead";
import { meta } from "page-config";

// eslint-disable-next-line react/prop-types
const InlineCode = ({ children }) => (
  <code className="text-lg text-orange-700 break-words">{children}</code>
);

const Quickhub = () => (
  <Layout>
    <PageHead meta={meta.quickhub} />
    <article>
      <h1>QuickHub for GitHub</h1>
      <p>
        I've just joined{" "}
        <Link
          text="Commit"
          href="https://commit.dev"
          underline
          className="italic"
        />{" "}
        as an Engineering Partner!
      </p>
      <p>
        As part of my onboarding, they gave me free rein to "scratch an itch" as
        it was put. The catch? I had to present it back to an open invite Zoom
        chat, no big deal!
      </p>
      <p>
        After toying with some ideas I settled on a Chrome Extension. I've built
        a couple of simple "new tab" pages before but QuickHub would require a
        fully functioning popup and integration with the Chrome API's, this was
        all new to me.
      </p>

      <hr className="my-8 opacity-25" />
      <h2>The Idea</h2>
      <p>
        I usually have a GitHub tab or two open and often find like many other
        apps they get buried in an overloaded tab bar.
      </p>
      <figure className="my-8">
        <Img width={832} height={74} src="/quickhub/so-many-tabs.png" />
        <figcaption className="mt-2 text-xs">Seen worse.</figcaption>
      </figure>

      <p>The plan was to surface links to the most common GitHub items:</p>
      <ul className="text-xl list-disc list-inside">
        <li className="text-xl">Personal repositories</li>
        <li className="text-xl">Organization repositories</li>
        <li className="text-xl">Notifications</li>
      </ul>
      <p className="mt-3">and built with:</p>
      <ul className="text-xl list-disc list-inside">
        <li className="text-xl">React</li>
        <li className="text-xl">GraphQL</li>
        <li className="text-xl">Chrome</li>
      </ul>

      <hr className="my-8 opacity-25" />

      <h2>Getting Started</h2>
      <p>
        The first thing I did was reach for Next.js but found it wouldn't be
        suitable and then went for create-react-app to get a front end running
        asap.
        <br /> All of this would later turn out to be a waste of time.
      </p>
      <p>
        The second thing I did was remember I don't know anything about the
        Chrome Extension platform.
        <br /> This should have been first.
      </p>
      <p>
        Even still, brimming with misplaced confidence I skimmed the docs,
        skimmed a few articles and then started on the GitHub auth docs where I
        quickly found that you have to authenticate server-side. Well, I don't
        have anything server-side backing this, nor did I plan or want to build
        a server. Immediately this small project was escalating.
      </p>

      <hr className="my-8 opacity-25" />
      <h2>Authentication</h2>
      <p>Firebase to the rescue! (mostly)</p>
      <p>
        At this point, I learned that following someone on YouTube who seemingly
        knows the Chrome platform, doesn't mean they actually do.
      </p>
      <p>
        The Firebase UI kit isn't supported in a Chrome Extension - even though
        you can make it work, as my YouTube friend demoed. What I found was that
        when you close an extension popup, any kind of state is emptied so the
        app would require the user to log in every time they open it.
        <br />
        To persist the auth state Mr. YouTube was sending a message to the
        extension <InlineCode>background.js </InlineCode>
        through <InlineCode>chrome.runtime </InlineCode>
        which can persist state and setting an auth variable to{" "}
        <InlineCode>true</InlineCode>. Which is utterly ridiculous if you think
        about it. There are a bunch of ways in which the user could become
        logged out but this app would blindly say
        <i>
          {" "}
          "all good bro, I've got a <InlineCode>true</InlineCode> over here!"{" "}
        </i>
        🤦🏻‍♂️
      </p>
      <p>
        So I removed Firebase UI, read the Firebase docs, implemented the auth
        flow on the extensions <InlineCode>background.js</InlineCode> and built
        a frontend to communicate with the background.
        <br />
        This way Firebase is able to persist the user state and when a user
        launches the popup I check the real auth state with
        <InlineCode> firebase.auth().currentUser</InlineCode> and allow them to
        continue knowing I have the correct access token or redirect them to log
        in again.
      </p>
      <p>
        From this endeavour, I did at least learn more about{" "}
        <InlineCode>chrome.runtime </InlineCode>
        which is the crux of the chrome extension framework
      </p>

      <hr className="my-8 opacity-25" />
      <h2>GitHub</h2>
      <p>The GitHub API is extensive.</p>
      <p>
        While this app only requires read access, unfortunately, to get private
        repositories I have to request full access, which seems unnecessary?
        While setting the access scope is easy I did get tripped up by this API.
      </p>
      <p>
        When you've logged in the GitHub API returns the user profile with a
        bunch of API paths to follow to obtain more user data.
        <br />
        For example to get all the user repos:{" "}
        <InlineCode>https://api.github.com/users/searleb/repos</InlineCode>
        <br />
        How good is that?!
      </p>
      <p>
        Well, it turns out not very. This endpoint returns public data, even if
        you're authenticated with private access. It took a while to figure this
        out and the solution I came up with was to use the search endpoint and
        construct the URL myself which looks like this:
        <br />
        <InlineCode>/search/repositories?q=user:searleb </InlineCode>
        which does return private info if authenticated.
        <br />
        This doesn't seem intuitive so I still wonder if I missed something in
        the docs?
      </p>
      <p>
        Once I'd got over that and built out all the API calls needed I found my
        <InlineCode> background.js</InlineCode> was getting big. It contained
        all the Firebase and GitHub logic and as well all the event listeners
        communicating with the popup.
      </p>

      <hr className="my-8 opacity-25" />
      <h2>Front End</h2>
      <p>
        Communication between the popup frontend and the background is done via{" "}
        <InlineCode>chrome.runtime.sendMessage </InlineCode> and
        <InlineCode> chrome.runtime.onMessage.addListener</InlineCode> methods
      </p>
      <p>
        I decided to build out a flow that implemented an "optimistic UI" of
        sorts using React Context and caching with Chrome storage.
      </p>
      <ol className="list-decimal list-inside">
        <li className="text-xl">
          Front end sends out a message to the background requesting data.
        </li>
        <li className="text-xl">
          Background listens for the message and returns local storage data and
          calls the GitHub API.
        </li>
        <li className="text-xl">
          Front end updates context state with existing local storage data.
        </li>
        <li className="text-xl">
          Fetch response is saved to{" "}
          <InlineCode>chrome.runtime.local.storage</InlineCode>.
        </li>
        <li className="text-xl">
          Background listens for changes to local storage and sends out a
          message with updates.
        </li>
        <li className="text-xl">
          Front end listens for storage changes and updates the context state
        </li>
      </ol>
      <figure className="my-8">
        <Img
          src="/quickhub/data-flow.png"
          width={768}
          height={501}
          alt="data flow diagram"
        />
        <figcaption className="text-xs">Data flow diagram.</figcaption>
      </figure>
      <br />
      <p>
        This system does exactly what I set out to do but it doesn't scale well.
        I started to feel even with this small app it became a bit monolithic in
        a way. Everything was tied to a single context that contained all app
        data. Fetching data for one component meant making edits to three or
        four files. Storage changes are broadcast even if the front end doesn't
        need it and if multiple messages are sent in succession I ran into a
        race condition where the React state would get out of sync. This was
        fixed by combining the data into a single message on the background but
        it was still a gotcha to work around.
      </p>

      <hr className="my-8 opacity-25" />
      <h2>Starting to rethink things</h2>
      <p>
        By now I'm starting to get a better grasp of the chrome extension
        framework but because I was using create-react-app I had no control over
        the build so <InlineCode>background.js</InlineCode> was left hanging
        around outside of the build process.
      </p>
      <p>Goodbye CRA!</p>
      <p>
        I removed everything and built my own pipeline with Webpack. Now I was
        able to split out the background event listeners, Firebase and GitHub
        logic into their own files and import them. 🧹
      </p>
      <p>
        This also gave me control over the build output. Extensions have some
        particular requirements, like the naming of some assets and a{" "}
        <InlineCode>manifest.json</InlineCode> that I could now automate in the
        build process.
      </p>
      <p>Being able to add in a Tailwind.css build set was a bonus too.</p>
      <p>
        I also started to move only really "global" data into context to share
        between multiple components and component level data into local state.
        This does simplify the data flow and keeps state close to where it's
        used but it means I no longer have the optimistic UI.
      </p>

      <hr className="my-8 opacity-25" />
      <h2>MVP</h2>
      <p>
        At this point, I had a fully functioning app that does everything I set
        out to do and so it was demo time.
      </p>
      <p>
        The demo itself only took a few minutes but when you have a room full of
        engineers there is plenty to talk about even with a single page app that
        just gives you a bunch of links! So another 45 mins went by where we all
        chatted about the tech, approach, decisions and challenges I had putting
        it all together.
      </p>

      <hr className="my-8 opacity-25" />
      <h2>Next</h2>
      <p>
        I would like to improve and simplify the data flow and bring back data
        caching for that fast UI.
      </p>
      <p>
        I never got to build with GraphQL, I went with REST because I'm more
        familiar with it which meant I could get moving quicker in the limited
        time I had. The REST API returns tons of info and I'm using almost none
        of it so moving to GraphQL makes a lot of sense.
      </p>
      <p>
        This app does work in Firefox as well but I discovered that Firebase
        doesn't support Firefox which is a bummer.
      </p>

      <hr className="my-8 opacity-25" />
      <h2>Summary</h2>
      <p>
        I learned a lot building this project, aside from getting pretty
        conformable with the Chrome extension framework and some of the GitHub
        API, I learned more about actually learning.
      </p>
      <p>
        I've been building websites since 2013 and I think I had become so used
        to Next.js and the frameworks I'm familiar with that when I jumped into
        this, building on a platform that is web-based but not exactly how we're
        used to in the browser, I didn't take the time to go back to basics and
        get to know this new environment. I really didn't need to reach for any
        js library to get started. At the start, this was a hindrance as it got
        in the way of learning new things.
      </p>
      <p>
        Trust myself and don't try to cut corners. YouTube, Medium,
        StackOverflow etc all offer loads of helpful insights but they're
        unlikely to cover your exact use case and "best practices" are a moving
        target.
        <br />
        That YouTube video I watched promised to walk me through the Firebase
        integration with a platform I was unfamiliar with. It took an approach I
        wasn't considering initially but I figured this would just get it done
        quickly. While I did learn some stuff I also had to undo the entire
        thing and go back to doing it the way I had imagined in the first place.
      </p>

      <p>
        Overall I'm happy with it. The code is open source, PR's and suggestions
        are welcome!
      </p>

      <hr className="my-16 opacity-25" />

      <p className="mt-16">
        <Link
          href="https://github.com/searleb/quickhub"
          text="QuickHub GitHub repo"
          underline
          className="block"
        />
        <Link
          href="https://chrome.google.com/webstore/detail/quickhub-for-github/enkmcdampommhlgbjnmiodbgnmgknjbg"
          text="Download QuickHub from the Chrome Store"
          underline
          className="block my-8"
        />
      </p>

      <Img
        width={1024}
        height={640}
        src="/quickhub/chrome-store.jpg"
        alt="quickhub"
      />
    </article>
  </Layout>
);

export default Quickhub;
