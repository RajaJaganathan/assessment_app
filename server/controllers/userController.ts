export function fetchUser(req, res){
  res.status(200).json(req.session.user);
};
