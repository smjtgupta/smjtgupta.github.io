import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { TechGrid } from "@/components/TechGrid";
import HTMLIcon from "@/assets/icons/html5.svg";
import PythonIcon from "@/assets/icons/python.svg";
import CIcon from "@/assets/icons/c.svg";
import CplusIcon from "@/assets/icons/c++.svg";
import CudaIcon from "@/assets/icons/cuda.svg";
import VbIcon from "@/assets/icons/vb.svg";
import TfIcon from "@/assets/icons/tensorflow.svg";
import KerasIcon from "@/assets/icons/keras.svg";
import TorchIcon from "@/assets/icons/pytorch.svg";
import DaskIcon from "@/assets/icons/dask.svg";
import SparkIcon from "@/assets/icons/spark.svg";
import NumpyIcon from "@/assets/icons/numpy.svg";
import PandasIcon from "@/assets/icons/pandas.svg";
import ScikitIcon from "@/assets/icons/scikitlearn.svg";
import ScipyIcon from "@/assets/icons/scipy.svg";
import XgbIcon from "@/assets/icons/xgboost.svg";
import OpencvIcon from "@/assets/icons/opencv.svg";
import HuggFaceIcon from "@/assets/icons/hf.svg";
import SpacyIcon from "@/assets/icons/spacy.svg";
import MongoIcon from "@/assets/icons/mongodb.svg";
import PostgreIcon from "@/assets/icons/postgresql.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextjsIcon from "@/assets/icons/nextjs.svg";
import TailwindIcon from "@/assets/icons/tailwind.svg";
import GithubIcon from "@/assets/icons/github.svg";
import RestIcon from "@/assets/icons/rest.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import GptIcon from "@/assets/icons/gpt.svg";
import BertIcon from "@/assets/icons/google.svg";
import LlamaIcon from "@/assets/icons/ollama.svg";
import DeepseekIcon from "@/assets/icons/deepseek.svg";

const languageItems = [
  { title: "Python", iconType: PythonIcon },
  { title: "C", iconType: CIcon },
  { title: "C++", iconType: CplusIcon },
  { title: "CUDA", iconType: CudaIcon },
  { title: "Visual\nBasic", iconType: VbIcon },
];

const frameworkItems = [
  { title: "Tensor\nFlow", iconType: TfIcon },
  { title: "Keras", iconType: KerasIcon },
  { title: "PyTorch", iconType: TorchIcon },
  { title: "Dask", iconType: DaskIcon },
  { title: "PySpark", iconType: SparkIcon },
];

const libraryItems = [
  { title: "Numpy", iconType: NumpyIcon },
  { title: "Pandas", iconType: PandasIcon },
  { title: "Scikit\nLearn", iconType: ScikitIcon },
  { title: "Scipy", iconType: ScipyIcon },
  { title: "XGBoost", iconType: XgbIcon },
  { title: "OpenCV", iconType: OpencvIcon },
  { title: "Hugging\nFace", iconType: HuggFaceIcon },
  { title: "Spacy", iconType: SpacyIcon },
];

const dbmsItems = [
  { title: "MongoDB", iconType: MongoIcon },
  { title: "Postgres", iconType: PostgreIcon },
];

const frontItems = [
  { title: "ReactJS", iconType: ReactIcon },
  { title: "NextJS", iconType: NextjsIcon },
  { title: "Tailwind\nCSS", iconType: TailwindIcon },
  { title: "HTML", iconType: HTMLIcon },
];

const llmItems = [
  { title: "Bert", iconType: BertIcon },
  { title: "GPT", iconType: GptIcon },
  { title: "Ollama", iconType: LlamaIcon },
  { title: "Deepseek", iconType: DeepseekIcon },
];

const otherItems = [
  { title: "Github", iconType: GithubIcon },
  { title: "Rest", iconType: RestIcon },
  { title: "Docker", iconType: DockerIcon },
];

// const hobbies = [
//   {
//     title: "Painting",
//     emoji: "😃",
//     left: "5%",
//     top: "5%",
//   },
//   {
//     title: "Gaming",
//     emoji: "😃",
//     left: "50%",
//     top: "5%",
//   },
//   {
//     title: "Photography",
//     emoji: "😃",
//     left: "10%",
//     top: "35%",
//   },
// ];

export const ToolsSection = () => {
  return (
    <div className="py-20" id="tools">
      <div className="container">
        <SectionHeader
          eyebrow="My Tools"
          title="Tech Skill Suite"
          description="Technologies that power my projects"
        />
        <div className="mt-10 flex flex-col gap-8">
          <div className="grid grid-cols-1">
            <Card className="">
              <div className="flex flex-col p-4 md:py-4 md:px-6">
                <h3 className="font-serif text-3xl">Programming Languages</h3>
                <TechGrid
                  items={languageItems}
                  className="py-5 grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-4"
                />
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-1">
            <Card className="">
              <div className="flex flex-col p-4 md:py-4 md:px-6">
                <h3 className="font-serif text-3xl">Frameworks</h3>
                <TechGrid
                  items={frameworkItems}
                  className="py-5 grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-4"
                />
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-1">
            <Card className="">
              <div className="flex flex-col p-4 md:py-4 md:px-6">
                <h3 className="font-serif text-3xl">Libraries</h3>
                <TechGrid
                  items={libraryItems}
                  className="py-5 grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-4"
                />
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            <Card className="md:col-span-2">
              <div className="flex flex-col p-4 md:py-4 md:px-6">
                <h3 className="font-serif text-3xl">DBMS</h3>
                <TechGrid
                  items={dbmsItems}
                  className="py-5 grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4"
                />
              </div>
            </Card>
            <Card className="md:col-span-3">
              <div className="flex flex-col p-4 md:py-4 md:px-6">
                <h3 className="font-serif text-3xl">Front-End</h3>
                <TechGrid
                  items={frontItems}
                  className="py-5 grid grid-cols-2 gap-4"
                />
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="md:col-span-1">
              <div className="flex flex-col p-4 md:py-4 md:px-6">
                <h3 className="font-serif text-3xl">LLMs</h3>
                <TechGrid
                  items={llmItems}
                  className="py-5 grid grid-cols-2 gap-4"
                />
              </div>
            </Card>
            <Card className="md:col-span-1">
              <div className="flex flex-col p-4 md:py-4 md:px-6">
                <h3 className="font-serif text-3xl">Others</h3>
                <TechGrid
                  items={otherItems}
                  className="py-5 grid grid-cols-2 gap-4"
                />
              </div>
            </Card>
          </div>
          {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="smiling memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div> */}
        </div>
      </div>
    </div>
  );
};
