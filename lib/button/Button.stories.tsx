import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./index";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  name: "Default",
  args: {
    children: "click me!",
  },
};
export const Emoji: Story = {
  name: "Emoji",
  args: {
    children: "😀",
  },
};
