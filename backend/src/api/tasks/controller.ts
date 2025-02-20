import { Request, Response, NextFunction } from "express";
import Task from "./model";
import { createError } from "../../middlewares/error-handler";

export const createTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, description, status } = req.body;

    if (!title || !description || !status) {
      return next(createError("Required fields are missing.", 400));
    }

    const task = await Task.create({ title, description, status });

    res.status(201).json({ success: true, data: task });
  } catch (error) {
    next(error);
  }
};

export const getAllTasks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tasks = await Task.findAll();

    if (tasks.length === 0) {
      return next(createError("No tasks found.", 404));
    }

    res.status(200).json({ success: true, data: tasks });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, description, status } = req.body;
    const { taskId } = req.params;

    if (!taskId) {
      return next(createError("Task ID is missing.", 400));
    }

    if (!title || !description || !status) {
      return next(createError("Required fields are missing.", 400));
    }

    const task = await Task.update({ title, description, status }, { where: { 
      id: taskId 
    }});

    res.status(200).json({ success: true, data: task });
  } catch (error) {
    next(error);
  }
}

export const updateTaskStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { taskId, newStatus } = req.params;

    if (!taskId) {
      return next(createError("Task ID is missing.", 400));
    }

    if (!newStatus) {
      return next(createError("Status is missing.", 400));
    }

    const task = await Task.update({ status: newStatus }, { where: { 
      id: taskId 
    }});

    res.status(200).json({ success: true, data: task });
  } catch (error) {
    next(error);
  }
}

export const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { taskId } = req.params;

    if (!taskId) {
      return next(createError("Task ID is missing.", 400));
    }

    await Task.destroy({ where: { id: taskId } });

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    next(error);
  }
}