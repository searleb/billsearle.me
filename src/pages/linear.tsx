import classNames from "classnames";
import { Layout } from "components/Layout";

// Hope you don't mind, I stole some of your SVGs
const Avatar = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 16 16"
    fill="lch(39.286% 1 282.863 / 1)"
    role="img"
    focusable="false"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.49414 9.01367C9.59654 9.07902 10.3652 9.36746 10.915 9.7998C11.5276 10.2818 11.7818 10.8942 11.917 11.1572C11.9631 11.2471 12.0412 11.4225 12.1299 11.627C12.3955 11.3247 12.6312 10.9953 12.8262 10.6396C13.0252 10.2765 13.4815 10.1438 13.8447 10.3428C14.2078 10.5419 14.3406 10.9972 14.1416 11.3604C12.9535 13.5276 10.6493 15 8 15C5.35075 14.9999 3.04647 13.5276 1.8584 11.3604C1.65942 10.9972 1.79227 10.5419 2.15527 10.3428C2.51844 10.1437 2.97369 10.2766 3.17285 10.6396C3.36669 10.9933 3.60055 11.3213 3.86426 11.6221C3.9542 11.4155 4.03681 11.2353 4.08984 11.1387L4.21973 10.8916C4.38006 10.5923 4.64259 10.1584 5.09668 9.80078C5.72389 9.30695 6.63257 9.00005 8 9L8.49414 9.01367ZM8 10.5C6.85441 10.5 6.3091 10.7545 6.02441 10.9785C5.71829 11.2196 5.61306 11.482 5.4043 11.8613C5.35437 11.9525 5.21237 12.2814 5.05957 12.6465C5.9106 13.186 6.91848 13.5 8 13.5C9.0797 13.5 10.0856 13.1863 10.9355 12.6484C10.7826 12.287 10.6357 11.9458 10.583 11.8428C10.3958 11.4787 10.288 11.2155 9.98828 10.9795C9.73953 10.7838 9.28727 10.5637 8.40527 10.5117L8 10.5Z"
    ></path>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.85254 6.64062C2.26469 6.68086 2.56648 7.04777 2.52637 7.45996C2.5091 7.63744 2.5 7.81756 2.5 8C2.5 8.41421 2.16421 8.75 1.75 8.75C1.33579 8.75 1 8.41421 1 8C1 7.76892 1.01123 7.54019 1.0332 7.31445C1.07335 6.90222 1.44029 6.6005 1.85254 6.64062Z"
    ></path>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.1475 6.64062C14.5597 6.6005 14.9266 6.90222 14.9668 7.31445C14.9888 7.54019 15 7.76892 15 8C15 8.41421 14.6642 8.75 14.25 8.75C13.8358 8.75 13.5 8.41421 13.5 8C13.5 7.81756 13.4909 7.63744 13.4736 7.45996C13.4335 7.04777 13.7353 6.68086 14.1475 6.64062Z"
    ></path>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8 4C9.10457 4 10 4.89543 10 6C10 7.10457 9.10457 8 8 8C6.89543 8 6 7.10457 6 6C6 4.89543 6.89543 4 8 4Z"
    ></path>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M3.55859 2.58887C3.8786 2.32594 4.35129 2.37243 4.61426 2.69238C4.87721 3.01243 4.83079 3.48509 4.51074 3.74805C4.23237 3.97679 3.97679 4.23237 3.74805 4.51074C3.48509 4.83079 3.01243 4.87721 2.69238 4.61426C2.37243 4.35129 2.32594 3.8786 2.58887 3.55859C2.8797 3.20463 3.20463 2.8797 3.55859 2.58887Z"
    ></path>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.3857 2.69238C11.6487 2.37243 12.1214 2.32594 12.4414 2.58887C12.7954 2.8797 13.1203 3.20463 13.4111 3.55859C13.6741 3.8786 13.6276 4.35129 13.3076 4.61426C12.9876 4.87721 12.5149 4.83079 12.252 4.51074C12.0232 4.23237 11.7676 3.97679 11.4893 3.74805C11.1692 3.48509 11.1228 3.01243 11.3857 2.69238Z"
    ></path>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8 1C8.23108 1 8.45981 1.01123 8.68555 1.0332C9.09778 1.07335 9.3995 1.44029 9.35938 1.85254C9.31914 2.26469 8.95223 2.56648 8.54004 2.52637C8.36256 2.5091 8.18244 2.5 8 2.5C7.81756 2.5 7.63744 2.5091 7.45996 2.52637C7.04777 2.56648 6.68086 2.26469 6.64062 1.85254C6.6005 1.44029 6.90222 1.07335 7.31445 1.0332C7.54019 1.01123 7.76892 1 8 1Z"
    ></path>
  </svg>
);

const Progress = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle
      cx="7"
      cy="7"
      r="6"
      fill="none"
      stroke="lch(80% 90 85)"
      stroke-width="1.5"
      stroke-dasharray="3.14 0"
      stroke-dashoffset="-0.7"
    ></circle>
    <circle
      cx="7"
      cy="7"
      r="2"
      fill="none"
      stroke="lch(80% 90 85)"
      stroke-width="4"
      stroke-dasharray="11.309733552923255 22.61946710584651"
      stroke-dashoffset="5.654866776461628"
      transform="rotate(-90 7 7)"
    ></circle>
  </svg>
);

const Dots = () => (
  <svg
    aria-label="No Priority"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="lch(39.286% 1 282.863 / 1)"
    role="img"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="1.5" y="7.25" width="3" height="1.5" rx="0.5" opacity="0.9"></rect>
    <rect x="6.5" y="7.25" width="3" height="1.5" rx="0.5" opacity="0.9"></rect>
    <rect
      x="11.5"
      y="7.25"
      width="3"
      height="1.5"
      rx="0.5"
      opacity="0.9"
    ></rect>
  </svg>
);

interface LinearCardProps {
  ticketNumber: string;
  title: string;
  type?: string;
}

const LinearCard = ({ ticketNumber, title, type }: LinearCardProps) => (
  <div
    className={classNames(
      "py-2 px-[10px] bg-white text-black border border-gray-300 shadow-sm rounded-md max-w-[320px] flex flex-col gap-2",
      {
        "shadow-blue-200 bg-blue-100": type === "Frontend",
        "shadow-green-200 bg-green-100": type === "Backend",
        "shadow-yellow-200 bg-yellow-100": type === "Design",
        "shadow-red-200 bg-red-100": type === "Bug",
      }
    )}
  >
    <header className="text-gray-600 flex justify-between ">
      <span className="text-[12px]">{ticketNumber}</span>
      <span className="border rounded-full h-[18px] w-[18px] text-[8px] flex justify-center items-center">
        <Avatar />
      </span>
    </header>
    <div className="flex gap-1.5 items-center">
      <Progress />
      <span className="text-[13px] font-semibold">{title}</span>
    </div>
    <div className="flex gap-2">
      <div className="border rounded-md h-[22px] w-fit p-1 flex items-center border-gray-400 bg-white/50 ">
        <Dots />
      </div>
      {!!type && (
        <div className="border rounded-md h-[22px] w-fit p-[4px] flex items-center text-[11px] text-gray-600 gap-2 border-gray-400 bg-white/50">
          <span
            className={classNames("h-[9px] w-[9px] rounded-full", {
              "bg-blue-500": type === "Frontend",
              "bg-green-500": type === "Backend",
              "bg-yellow-500": type === "Design",
              "bg-red-500": type === "Bug",
            })}
          />
          {type}
        </div>
      )}
    </div>
  </div>
);

export default function Linear() {
  return (
    <Layout>
      <h1 className="mb-8 text-4xl">New Linear Feature</h1>
      <p className="text-[16px] pb-0.5">
        My manager mentioned he finds Linear slightly harder to visually scan
        for the cards he's looking for.
      </p>
      <p className="text-[16px]">
        Linear could expand the card type concept by assigning a visual style to
        each card type.
      </p>
      <p className="text-[16px]">
        By implementing distinct visual styles for each card type, users can
        quickly identify the nature of a task at a glance, improving overall
        workflow efficiency.
      </p>
      <p className="text-[16px]">
        From a design perspective, there are many ways to achieve this. To
        demonstrate the idea I have colored the whole card but a more subtle
        approach could be to just color the header of the card for example.
      </p>

      <section className="bg-gray-200 rounded-lg p-10 grid grid-cols-2 gap-3 max-w-2xl mt-10">
        <LinearCard
          ticketNumber="HIRE-86"
          title="Implement user authentication flow"
          type="Frontend"
        />
        <LinearCard
          ticketNumber="HIRE-87"
          title="Database migration for new schema"
          type="Backend"
        />
        <LinearCard
          ticketNumber="HIRE-88"
          title="Memory leak in checkout"
          type="Bug"
        />
        <LinearCard
          ticketNumber="HIRE-89"
          title="Redesign dashboard navigation"
          type="Design"
        />
        <LinearCard ticketNumber="HIRE-94" title="Write AI docs" />
        <LinearCard
          ticketNumber="HIRE-90"
          title="Add responsive mobile layout"
          type="Frontend"
        />
        <LinearCard
          ticketNumber="HIRE-91"
          title="Optimize API response times"
          type="Backend"
        />
        <LinearCard ticketNumber="HIRE-93" title="Create new onboarding flow" />
        <LinearCard
          ticketNumber="HIRE-92"
          title="Fix payment processing error"
          type="Bug"
        />
      </section>
    </Layout>
  );
}
