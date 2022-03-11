import { useEffect, useRef } from "react";

export function useInterval(callback, delay, ...callbackParams) {
  const savedCallback = useRef();

  // remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // setup the interval
  useEffect(() => {
    function tick() {
      savedCallback.current(callbackParams);
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [callback, delay, callbackParams]);
}

// useInterval(
//   (params) => {
//     const chatId = params[0];
//     fetch(
//       `https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats/${chatId}/messages`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setMessages(data.Items);
//       });
//   },
//   // 1000, // fast polling
//   60000, // slow polling
//   chatId
// );
