import { useEffect, Suspense, lazy } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";
import { useChatStore } from "./lib/chatStore";

// Use lazy for dynamic import
const Chat = lazy(() => import("./components/chat/Chat"));
const Detail = lazy(() => import("./components/detail/Detail"));
const List = lazy(() => import("./components/list/List"));
const Login = lazy(() => import("./components/login/Login"));
const Notification = lazy(() => import("./components/notification/Notification"));

const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const { chatId } = useChatStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  if (isLoading) return <div className="loading">Loading...</div>;

  return (
    <div className="container">
      <Suspense fallback={<div className="loading">Loading...</div>}>
        {currentUser ? (
          <>
            <List />
            {chatId && <Chat />}
            {chatId && <Detail />}
          </>
        ) : (
          <Login />
        )}
        <Notification />
      </Suspense>
    </div>
  );
};

export default App;
