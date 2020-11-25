import Link from '../components/Link';
import Img from '../components/Img';
import PageHead from '../components/PageHead';
import Layout from '../components/Layout';
import { meta } from '../page-config';

// eslint-disable-next-line react/prop-types
const Code = ({ children }) => <code className="text-lg text-orange-700">{children}</code>;

const Quickhub = () => (
  <Layout>
    <PageHead meta={meta.quickhub} />
    <article>
      <h1>QuickHub for GitHub</h1>
      <p>I've just joined <Link text="Commit" href="https://commit.dev" underline className="italic" /> as an Engineering Partner!</p>
      <p>
        And as part of my on boarding, they gave me free reign to "scratch an itch" as it was put.
        The catch? I had to present it back to an open invite Zoom chat, no big deal!
      </p>
      <p>
        So after toying with some ideas I settled on a Chrome Extension.
        I've built a couple of simple "new tab" pages before but QuickHub
        would require a fully functioning popup
        and integration with the Chrome API's, this was all new to me.
      </p>
      <hr className="my-8 opacity-0" />
      <h2>The Idea</h2>
      <p>
        I usually have a GitHub tab or two open and often find, they like many other apps get
        buried in a overloaded tab bar.
      </p>
      <figure className="my-8">
        <Img width={832} height={74} src="/quickhub/so-many-tabs.png" />
        <figcaption className="mt-2 text-xs">Seen worse.</figcaption>
      </figure>

      <p>The plan was to surface links to the most common GitHub items into Chrome:</p>
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

      <hr className="my-8 opacity-0" />

      <h2>Getting Started</h2>
      <p>
        The first thing I did was reach for Next.js but
        found it wouldn't be suitable and then went for create-react-app to
        get a front end running asap.
        <br /> All of this would later turn out to be a waste of time.
      </p>
      <p>
        The second thing I did was remember I don't know anything about the
        Chrome Extension platform.
        <br /> This should have been first.
      </p>
      <p>
        Even still, brimming with misplaced confidence I skimmed the docs, skimmed a few articles
        and then started on the GitHub auth docs where I quickly found that
        you have to authenticate server side.
        Well I don't have a anything server side backing this,
        nor did I plan or want to build a server.
        Immediately this small project was escalating.
      </p>

      <hr className="my-8 opacity-0" />
      <h2>Authentication</h2>
      <p>
        Firebase to the rescue! (mostly)
      </p>
      <p>
        At this point I learned that following someone on YouTube
        who seemingly knows the Chrome platform,
        doesn't mean they actually do.
      </p>
      <p>
        The Firebase UI kit isn't supported in a Chrome Extension
        - even though you can make it work, as my YouTube friend demoed.
        What I found was that when you close an extension popup, any kind
        of state is emptied so the app would require the user to log in
        every time they open it.
        <br />
        To persist the auth state Mr YouTube was sending a message to
        the extension <Code>background.js</Code> through <Code>chrome.runtime </Code>
        which can persist state and setting
        an auth variable to <Code>true</Code>.
        Which is utterly ridiculous if you think about it.
        There are a bunch of ways in which the user could become logged out
        but this app would blindly say
        <i> "all good bro, I've got a <Code>true</Code> over here!" </i>
        🤦🏻‍♂️
      </p>
      <p>
        So I removed Firebase UI, read the Firebase docs, implemented the auth flow
        on the extensions <Code>background.js</Code> and built a frontend to communicate
        with the background.
        <br />
        This way Firebase is able to persist the users state and when a user launches the
        popup I check the real auth state with <Code>firebase.auth().currentUser</Code> and
        allow them to continue knowing I have the correct access token or redirect
        them to login again.
      </p>
      <p>
        From this endeavour I did at least learn more about <Code>chrome.runtime </Code>
        which is the crux of the chrome extension framework
      </p>

      <hr className="my-8 opacity-0" />
      <h2>GitHub</h2>
      <p>The GitHub API is extensive.</p>
      <p>
        While this app only requires read access, unfortunately to get private repositories
        I have to request full access, which seems unnecessary? While setting the access scope
        is easy I did get tripped up by this API.
      </p>
      <p>
        When you've logged in the GitHub API returns the user profile with a bunch of api paths
        to follow to obtain more user data.
        <br />
        For example to get all the user repos: <Code>https://api.github.com/users/searleb/repos</Code>
        <br />
        How good is that?!
      </p>
      <p>
        Well it turns out not very. This endpoint returns public data, even if you're authenticated
        with private access. It took a while to figure this out and the solution I came up
        with was to use the search endpoint and construct the URL myself which looks like this:
        <br />
        <Code>/search/repositories?q=user:searleb</Code>
        <br />
        {' '}which does return private info if authenticated.
        <br />
        This doesn't seem intuitive so I still wonder if I missed something in the docs?
      </p>
      <p>
        Once I'd got over that and built out all the API calls needed I found my
        <Code> background.js</Code> was getting big. It contained all the Firebase and GitHub
        logic and as well all the event listeners communicating with the popup.
      </p>

      <hr className="my-8 opacity-0" />
      <h2>Front End</h2>
      <p>
        Communication between the popup frontend and the background is done
        via <Code>chrome.runtime.sendMessage </Code> and
        <Code> chrome.runtime.onMessage.addListener</Code> methods
      </p>
      <p>
        I decided to build out a flow that implemented an "optimistic UI" using
        React Context and the Chrome storage.
      </p>
      <p>
        I would send a message from the front end to the background requesting an API call.
        <br />
        On the re
      </p>

      <hr className="my-8 opacity-0" />
      <h2>Starting to rethink things</h2>
      <p>
        By now I'm starting to get a better grasp of the extension framework API's I'm using
        but because I was using create-react-app I had no control over the build
        so <Code>background.js</Code> was left hanging around outside of the build process.
      </p>
      <p>
        Goodbye CRA!
      </p>
      <p>
        I removed everything and built my own pipeline with Webpack.
        Now I was able to split out the background event listeners, Firebase
        and GitHub logic into their own files and import them. 🧹
      </p>
      <p>
        This also gave me control over the build output. Extensions have
        some particular requirements, like the naming of some assets and
        a <Code>manifest.json</Code> that I could now automate in the build process.
      </p>

    </article>
  </Layout>
);

export default Quickhub;
