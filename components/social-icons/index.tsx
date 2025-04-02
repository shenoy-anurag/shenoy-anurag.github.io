import {
  Mail,
  Github,
  Facebook,
  Youtube,
  Linkedin,
  Kaggle,
  X,
  Mastodon,
  Threads,
  Instagram,
  Medium,
  Bluesky,
  NextJs,
  Tailwind,
  TypeScript,
  ShadCn,
  Umami,
  Mongodb,
  Markdown,
  Bash,
  Django,
  Docker,
  VsCode,
  FastAPI,
  Flask,
  GoLang,
  JavaScript,
  JSON,
  Jira,
  NGINX,
  Notion,
  Pandas,
  Postgres,
  Python,
  React,
  Redis,
  Yaml,
  AWS,
  Anaconda,
  Git,
  PyTorch,
  Postman,
  Numpy,
  Matplotlib,
  Jupyter,
  SciKitLearn,
  Celery,
  LangChain,
  Seaborn,
  GithubActions,
  RabbitMQ,
  Opensource,
} from './icons'

const components = {
  mail: Mail,
  github: Github,
  youtube: Youtube,
  linkedin: Linkedin,
  kaggle: Kaggle,
  medium: Medium,
  x: X,
  bluesky: Bluesky,
  mastodon: Mastodon,
  facebook: Facebook,
  threads: Threads,
  instagram: Instagram,
}

type SocialIconProps = {
  kind: keyof typeof components
  href: string | undefined
  size?: number
}

export const SocialIcon = ({ kind, href, size = 8 }: SocialIconProps) => {
  if (
    !href ||
    (kind === 'mail' && !/^mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(href))
  )
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`hover:text-primary-400 dark:hover:text-primary-500 fill-current text-gray-700 dark:text-gray-200 h-${size} w-${size}`}
      />
    </a>
  )
}

const iconComponents = {
  github: Github,
  linkedin: Linkedin,
  kaggle: Kaggle,
  nextjs: NextJs,
  tailwind: Tailwind,
  typescript: TypeScript,
  shadcn: ShadCn,
  umami: Umami,
  mongodb: Mongodb,
  markdown: Markdown,
  bash: Bash,
  django: Django,
  docker: Docker,
  vscode: VsCode,
  fastapi: FastAPI,
  flask: Flask,
  golang: GoLang,
  javascript: JavaScript,
  json: JSON,
  jira: Jira,
  nginx: NGINX,
  notion: Notion,
  pandas: Pandas,
  postgres: Postgres,
  python: Python,
  react: React,
  redis: Redis,
  yaml: Yaml,
  aws: AWS,
  anaconda: Anaconda,
  git: Git,
  pytorch: PyTorch,
  postman: Postman,
  numpy: Numpy,
  matplotlib: Matplotlib,
  jupyter: Jupyter,
  scikitlearn: SciKitLearn,
  celery: Celery,
  langchain: LangChain,
  seaborn: Seaborn,
  githubactions: GithubActions,
  rabbitmq: RabbitMQ,
  opensource: Opensource,
}

type IconsProps = {
  kind: keyof typeof iconComponents
  href: string | undefined
  size?: number
}

export const IconsBundle = ({ kind, href, size = 5 }: IconsProps) => {
  const IconSvg = iconComponents[kind]

  return (
    <a className="text-sm transition" target="_blank" rel="noopener noreferrer" href={href}>
      <span className="sr-only">{kind}</span>
      <IconSvg
        className={`hover:text-primary-400 dark:hover:text-primary-500 fill-current h-${size} w-${size}`}
      />
    </a>
  )
}
