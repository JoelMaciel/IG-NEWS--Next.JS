import { NextApiRequest, NextApiResponse } from "next";

export default (request, response) => {
    console.log(request.query);
    
  const users = [
    { id: 1, name: "Diego" },
    { id: 2, name: "Joel" },
    { id: 3, name: "Rafa" },
  ];
  return response.json(users);
};
//servless
