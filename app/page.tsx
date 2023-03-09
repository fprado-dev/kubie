"use client";
import { useQuery } from "react-query";
import Loading from "./loading";

const allTweets = async () => {
  const response = await fetch("/api/tweet/getTweets");
  return response.json();
};

export default function Home() {
  const { data, error, isLoading } = useQuery({
    queryFn: allTweets,
    queryKey: ["tweets"],
  });
  if (error) return error;
  if (isLoading) return <Loading />;
  console.log({ data });
  return (
    <div className="h-screen bg-gray-50 py-8">
      <div className="container mx-auto">
        <h2 className="mb-8 text-sm text-slate-800">Esses são seus Tweets:</h2>

        <div className="flex flex-col gap-4">
          {data.map((tweet: any) => (
            <div
              key={tweet.id}
              className="
            rounded-lg bg-gray-100 p-4 shadow-sm"
            >
              <p className="text-sm text-slate-800">{tweet.message}</p>
              <p className="text-sm text-slate-800">- {tweet.User.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
