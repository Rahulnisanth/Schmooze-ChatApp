import { useAppStore } from "@/store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import ChatContainer from "./components/chat-container";
import ContactsContainer from "./components/contacts-container";
import EmptyChatContainer from "./components/empty-chat-container";

const Chat = () => {
  const { userInfo, selectedChatType, selectedChatData } = useAppStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo.profile_setup) {
      toast.error("Please setup the profile to continue.");
      navigate("/profile");
    }
  }, [userInfo, navigate]);
  return (
    <div className="flex h-[100vh] overflow-hidden text-white">
      <ContactsContainer />
      {selectedChatType && selectedChatData ? (
        <ChatContainer />
      ) : (
        <EmptyChatContainer />
      )}
    </div>
  );
};

export default Chat;
