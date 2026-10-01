export type HowItWorksSceneId =
  | "account"
  | "invite"
  | "home"
  | "upload"
  | "insights";

export type HowItWorksStep = {
  id: HowItWorksSceneId;
  /** Short label for the hero step track and the progress rail. */
  shortTitle: string;
  title: string;
  description: string;
  points?: string[];
  /** Small print under the step, for limits the reader should know about. */
  note?: string;
  showStoreLinks?: boolean;
};

export type StepSceneProps = {
  /** Starts the scene's timeline. Until then the scene holds its first frame. */
  play: boolean;
};
