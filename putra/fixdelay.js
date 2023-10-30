/*const delay = 300;

const fixDelay = (conn, message) => {
  setTimeout(() => {
    conn.sendMessage(message.chat, message.content, message);
  }, delay);
};

export { fixDelay };*/
const delay = 250
const fixDelay = (conn, message) => {
  setTimeout(() => {
    conn.sendMessage(message.chat, message.content, message);
  }, delay);
};

export default fixDelay;
