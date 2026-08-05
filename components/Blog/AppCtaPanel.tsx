import GetAppButton from "./GetAppButton";

interface AppCtaPanelProps {
  title?: string;
  description?: string;
  gradient?: "brand" | "plum";
}

const gradients = {
  brand: "linear-gradient(145deg, #6E40F3, #5338A0 60%, #201839)",
  plum: "linear-gradient(145deg, #281B55, #201839)",
};

const AppCtaPanel = ({
  title = "Put this to work on your own records",
  description = "Upload a document and ask Kai what it means. Free to start.",
  gradient = "brand",
}: AppCtaPanelProps) => {
  return (
    <div className="rounded-[20px] p-7" style={{ background: gradients[gradient] }}>
      <h4 className="mb-2.5 text-2xl font-bold leading-[1.15] tracking-[-.5px] text-white text-pretty">
        {title}
      </h4>
      <p className="mb-5 text-[17px] leading-[1.5] text-light-heather">{description}</p>
      <GetAppButton size="md" fullWidth>
        Get the app
      </GetAppButton>
    </div>
  );
};

export default AppCtaPanel;
