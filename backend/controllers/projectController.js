import { matchedData } from "express-validator";
import Project from "../models/project.js";
import { StatusCodes } from "http-status-codes";

export const getAllProjects = async (req, res) => {
  const queryObj = {};
  const { search } = req.query;
  if (search) {
    queryObj[title] = { $regex: search, $options: "i" };
  }

  const projects = await Project.find(queryObj);
  res.status(StatusCodes.OK).json({ success: true, projects });
};

export const createProject = async (req, res) => {
  const projectData = matchedData(req);
  projectData.createdBy = req.user.UserId;

  const project = await Project.create(projectData);

  res.status(StatusCodes.CREATED).json({ success: true, project });
};

export const updateProject = async (req, res) => {
  res.send("update project");
};

export const deleteProject = async (req, res) => {
  res.send("delete project");
};
