import { NextApiRequest, NextApiResponse } from "next";

//JWT (Storage)
//Next Auth (Social)
//Cognito, Auth0

export default (request, response) => {
  const users = [
    { id: 1, name: "Diego" },
    { id: 2, name: "Joel" },
    { id: 3, name: "Rafa" },
  ];
  return response.json(users);
};
//servless
