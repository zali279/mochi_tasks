export type TaskStatus = "todo" | "in-progress" | "done" | "blocked";

export interface Task {
  id?: string;
  title: string;
  description: string;
  status: TaskStatus;
};

export type ColumnType = {
  type: TaskStatus;
  title: string;
};

