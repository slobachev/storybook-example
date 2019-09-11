import React from "react";
import { storiesOf } from "@storybook/react";

import TaskList from "./TaskList";
import { task, actions } from "./Task.stories";
import Task from "./Task";

export const defaultTasks = [
  { ...task, id: "1", title: "T1" },
  { ...task, id: "2", title: "T2" },
  { ...task, id: "3", title: "T3" },
  { ...task, id: "4", title: "T4" },
  { ...task, id: "5", title: "T5" },
  { ...task, id: "6", title: "T6" }
];

export const withPinnedTasks = [
  ...defaultTasks.slice(0, 5),
  { id: "6", title: "T6 pinned", state: "TASK_PINNED" }
];

storiesOf("TaskList", module)
  .addDecorator(story => <div style={{ padding: "3rem" }}>{story()}</div>)
  .add("default", () => <TaskList tasks={defaultTasks} {...actions} />)
  .add("withPinnedTasks", () => (
    <TaskList tasks={withPinnedTasks} {...actions} />
  ))
  .add("loading", () => <TaskList loading tasks={[]} {...actions} />)
  .add("empty", () => <TaskList tasks={[]} {...actions} />);
