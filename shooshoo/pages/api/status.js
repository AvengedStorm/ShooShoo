const networkstatus = {
    onlineUsers: 507,
    newPostsInLastDay: 700
}
export default function handler(req, res) {
    res.status(200).json(networkstatus)
  }
  