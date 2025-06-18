import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "../components/AppBar.js";
import { BACKEND_URL } from "../config.js";

function Publish() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isPublishing, setIsPublishing] = useState<boolean>(false);
  const navigate = useNavigate();

  const handlePublish = async () => {
    try {
      setIsPublishing(true);

      const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
        title,
        content
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });

      navigate(`/blog/${response.data.id}`);
    } catch (error) {
      console.error("Error publishing blog:", error);
      alert("Failed to publish. Please try again.");
      setIsPublishing(false); // Let user try again
    }
  };

  return (
    <div>
      <AppBar />
      <div className="pt-22 px-4 max-w-3xl mx-auto">
        <div className="grid grid-cols-[32px_1fr] gap-x-7">
          <div className="self-start pr-12 border-r border-slate-300 h-16">
            <button className="text-xl border border-gray-300 mt-3 rounded-full w-10 h-10 flex items-center justify-center text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </div>

          <div>
            <input
              type="text"
              placeholder="Title"
              className="w-full font-['EB_Garamond'] text-5xl font-normal outline-none placeholder-gray-400"
              onChange={e => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Tell your story..."
              className="w-full font-['EB_Garamond'] h-[60vh] mt-4 text-2xl font-light outline-none resize-none placeholder-gray-400"
              onChange={e => setContent(e.target.value)}
            />

            <div className="mt-10 flex justify-end">
              <button
                onClick={handlePublish}
                disabled={isPublishing}
                className={`px-5 py-2 rounded-md text-sm font-semibold ${
                  isPublishing
                    ? "bg-green-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700 cursor-pointer text-white"
                }`}
              >
                {isPublishing ? "Publishing..." : "Publish"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Publish;
