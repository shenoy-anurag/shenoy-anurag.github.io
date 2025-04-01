import { genPageMetadata } from 'app/seo'
import Image from '@/components/Image'

export const metadata = genPageMetadata({ title: 'Showcase' })

interface ShowcaseItem {
  id: string
  title: string
  description: string
  techStack: string
  deployment?: string
  keyFeatures?: Array<string>
  imgSrc: string
  imgAlt?: string
  demoURL?: { url: string; text: string }
  githubURL?: { url: string; text: string }
}

const showcaseItems: ShowcaseItem[] = [
  {
    id: '01',
    title: 'HinDict — Hindi to English Dictionary',
    description:
      'A bilingual dictionary that lets users type Hindi words phonetically in English letters to find the best English equivalents.',
    techStack: 'OpenAI GPT 4o-mini, React, Nextjs, Python, Flask, Ollama, and Prompt Engineering.',
    keyFeatures: [
      'Leverages advanced AI models to parse transliterated Hindi text.',
      'Provides definitions, pronunciations, and contextual examples.',
      'Aims to simplify language learning for non-native Hindi speakers.',
    ],
    imgSrc: '/static/images/hindict/namaste-light.png',
    imgAlt:
      'Demonstration screenshot of HinDict the Hindi to English dictionary project using the word Namaste as input',
    demoURL: { url: 'https://hindict.anuragshenoy.com/', text: 'HinDict' },
    githubURL: { url: 'https://github.com/shenoy-anurag/HinDict', text: 'GitHub' },
  },
  {
    id: '02',
    title: 'Debate AI — Agentic Research-Paper Debate Tool',
    description:
      'An autonomous debate platform that pits two LLM-based AI agents against each other on user-selected topics, moderated by a third AI agent.',
    techStack:
      'RAG, LangChain, LLM Inference, Ollama, Weaviate Vector DB, React, and Prompt Engineering.',
    keyFeatures: [
      'Uses retrieval-augmented generation (RAG) and vector search with Weaviate to provide contextually rich arguments.',
      'Demonstrates how AI agents can interact to refine complex ideas.',
      'Serves as a unique learning tool where users can observe AI-driven debates on cutting-edge research.',
    ],
    imgSrc: '/static/images/debate-ai/debate-ai.png',
    imgAlt:
      'Demonstration screenshot of Debate AI project, with two AI agents debating the topic "Should transformer model be used as the primary architecture for all NLP models?".',
    githubURL: { url: 'https://github.com/shenoy-anurag/DebateAI', text: 'Debate AI' },
  },
  {
    id: '03',
    title: 'Guessir - Word Guessing Game with a Twist',
    description:
      'A 6-letter word-guessing game featuring a dynamic “Hot & Cold” mechanic to guide players on letter positions.',
    techStack: 'React, Nextjs, Python, FastAPI, Postgres',
    keyFeatures: [
      'Uses color gradients to indicate how close each guessed letter is to its correct position.',
      'Offers a fresh alternative to standard Wordle-style puzzles.',
    ],
    imgSrc: '/static/images/guessir/guessir-jester2.png',
    imgAlt:
      'Screenshot of Guessir, the word guessing game being played with the player successfully guessing the correct answer of "Jester"',
  },
  {
    id: '04',
    title: 'Aggre-Gator — Hackathon-Winning News Aggregator',
    description:
      'A web platform that scrapes news from sources like CNN and Fox, allowing users to view both sides of a story on a single dashboard.',
    techStack: 'ElasticSearch, Docker, MongoDB, Python, Flask, Celery.',
    keyFeatures: [
      'Centralizes articles from multiple outlets, promoting balanced news consumption.',
      'Provides search and filtering with Elasticsearch for near-instant results.',
      'Automates data collection and indexing via Docker + Celery for reliability.',
    ],
    imgSrc: '/static/images/aggre-gator/aggre-gator-frontend.png',
    imgAlt:
      'Screenshot of Aggre-Gator landing page, with news articles aggregated from CNN and Fox.',
    githubURL: { url: 'https://github.com/shenoy-anurag/Aggre-Gator', text: 'Aggre-Gator GitHub' },
  },
  {
    id: '05',
    title: 'MedQuAD RAG Bot — A Retrieval Augmented Generation Chatbot',
    description:
      'A Chatbot utilizing the MedQuAD Dataset to provide accurate medical information and answers using technologies such as Retrieval Augmented Generation (RAG) and Large Language Models (LLMs).',
    techStack: 'GPT 4o-mini LLM, Qdrant Vector DB, LangChain framework, FastAPI, & React.',
    deployment: 'AWS Lambda, Docker, AWS ECR, AWS API Gateway, Netlify.',
    keyFeatures: [
      'Retrieval using Qdrant’s Vector DB, with the MedQuAD dataset as it’s high-quality, and accurate knowledge base.',
      'Prompt Engineering for providing context and constraining output length and scope.',
      'Deployment on Serverless compute for cost-effectiveness and high-throughput.',
    ],
    imgSrc: '/static/images/ragbot/medquad-ragbot-in-action.png',
    imgAlt:
      'Demonstration screenshot of HinDict the Hindi to English dictionary project using the word Namaste as input',
    demoURL: { url: 'https://medquad.netlify.app/', text: 'MedQuAD RAG Bot' },
    githubURL: { url: 'https://github.com/shenoy-anurag/LLM-RAG/', text: 'GitHub' },
  },
]

export default function Showcase() {
  return (
    <>
      <div className="flex flex-col divide-y divide-white">
        {showcaseItems.map((d, index) => (
          <div
            key={index}
            className="grid-flow-auto grid-row-2 grid items-center justify-center gap-12 py-8 lg:grid-flow-row lg:grid-cols-2 lg:py-24"
          >
            <div className="order-2 flex flex-col gap-6 lg:order-1 lg:items-start lg:gap-8 lg:pr-28">
              <h4 className="text-primary-500 text-lg">Project {d.id}</h4>
              <h2 className="text-2xl font-bold md:text-2xl lg:text-3xl">{d.title}</h2>
              <p className="text-lg">{d.description}</p>
              <p className="text-lg">
                <strong>Tech Stack:</strong>
                <span> </span>
                <span className="italic">{d.techStack}</span>
              </p>
              {d.deployment && (
                <p className="text-lg">
                  <strong>Deployment:</strong>
                  <span> </span>
                  <span className="italic">{d.deployment}</span>
                </p>
              )}
              {d.keyFeatures && (
                <div className="flex flex-col gap-2 text-lg text-black lg:gap-4 dark:text-white">
                  <strong>Key Features:</strong>
                  <ul className="list-outside list-disc pl-10">
                    {d.keyFeatures.map((feature, i) => (
                      <li key={i} className="my-3 pl-1">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {d.demoURL && d.githubURL ? (
                <div className="text-lg">
                  <p className="flex gap-4">
                    Links:{' '}
                    <a
                      href={d.demoURL.url}
                      aria-label={`link to ${d.demoURL.text}`}
                      className="underline"
                    >
                      {d.demoURL.text}
                    </a>
                    <span> | </span>
                    <a
                      href={d.githubURL.url}
                      aria-label={`link to ${d.githubURL.text}`}
                      className="underline"
                    >
                      {d.githubURL.text}
                    </a>
                  </p>
                </div>
              ) : (
                <div className="text-lg">
                  {d.githubURL && (
                    <p className="flex gap-4">
                      Links:{' '}
                      <a
                        href={d.githubURL.url}
                        aria-label={`link to ${d.githubURL.text}`}
                        className="underline"
                      >
                        {d.githubURL.text}
                      </a>
                    </p>
                  )}
                </div>
              )}
            </div>
            <Image
              src={d.imgSrc}
              alt={d.imgAlt || `Project ${d.title} image`}
              width={500}
              height={300}
              quality={100}
              unoptimized={true}
              className="order-1 w-[100dvw] lg:order-2"
            />
          </div>
        ))}
      </div>
    </>
  )
}
