'use client'
import GradientAnimation from '@/components/GradientAnimation'
import MainSectionContainer from '@/components/MainSectionContainer'
import Image from '@/components/Image'
import { FIREFLY, ASTRONAUT, DARK_MONZA_RED, MARTINIQUE, INDIGO } from '@/components/lib/colors'

interface Repository {
  id: string
  title: string
  description: string
  techStack: string
  keyFeatures?: Array<string>
  demoURL?: { url: string; text: string }
  githubURL?: { url: string; text: string }
  imgSrc?: string
  imgAlt?: string
  code?: { language: string; raw: string }
}

const repositories: Repository[] = [
  {
    id: '01',
    title: 'Elo',
    description:
      'Elo python package to simulate matches between players, and compare their elo ratings after each match. You can use it to simulate rankings of Chess players. Published to PyPI.',
    techStack: 'Python 3, Poetry, GitHub Actions, PyPI',
    keyFeatures: [
      'Create players and simulate matches, while keeping track of their Elo scores.',
      'Published to PyPI, so you can easily install using `pip install elo-viz`.',
    ],
    githubURL: { url: 'https://github.com/shenoy-anurag/elo', text: 'GitHub' },
    code: {
      language: 'python',
      raw: `
import uuid
from elo_viz import Match, Player

magnus_carlsen = Player(id=uuid.uuid4().hex, name='Magnus Carlsen', rating=2833)
gukesh_d = Player(id=uuid.uuid4().hex, name='Gukesh Dommaraju', rating=2777)

m1 = Match(match_id=uuid.uuid4().hex, player1=magnus_carlsen, player2=gukesh_d)
m1.update_result(winner=magnus_carlsen.id)

print(m1.player1)
`,
    },
  },
  {
    id: '02',
    title: 'B2B E-commerce',
    description:
      'A basic B2B e-commerce web application focusing on security, real-time updates, and role-based functionality. This is a full-stack application using modern technologies while adhering to best practices.',
    techStack: 'React, Flask, SQLite, NextJs, Python 3, HeroUI, Sqlalchemy 2',
    keyFeatures: [
      'Create, View, Edit and Delete Products.',
      'Signup and Login for Users and Admins.',
      'Role based access control powered by OAuth2.0.',
      'Audit logging for Admins.',
      'Follows MVC design pattern.',
    ],
    githubURL: { url: 'https://github.com/shenoy-anurag/b2b-ecommerce', text: 'GitHub' },
  },
  {
    id: '03',
    title: 'Algo Runner',
    description:
      'A python package with tools to let you try coding problems and check your code against your own test cases.',
    techStack: 'Python 3, Poetry, PyPI',
    keyFeatures: [
      'Simplify debugging LeetCode style questions in your IDE of choice.',
      'Create your own test-cases.',
      'Beautiful, and simple command line styling for test case results.',
    ],
    githubURL: { url: 'https://github.com/shenoy-anurag/algo-runner', text: 'GitHub' },
    demoURL: { url: 'https://pypi.org/project/leetcode-local-runner/', text: 'PyPI' },
  },
]

function Repository({ repo }: { repo: Repository }) {
  return (
    <div className="order-2 flex flex-col gap-6 lg:order-1 lg:items-start lg:gap-6">
      <h2 className="text-2xl font-bold md:text-2xl lg:pr-8 lg:text-3xl">{repo.title}</h2>
      <div className="flex flex-col gap-6 lg:gap-6 lg:pr-4">
        <p className="text-lg/8">{repo.description}</p>
        <p className="text-lg/8">
          <span className="font-bold">Tech Stack:</span>
          <span> </span>
          <span className="italic">{repo.techStack}</span>
        </p>
        {repo.keyFeatures && (
          <div className="flex flex-col gap-2 text-lg text-black lg:gap-4 lg:text-lg dark:text-white">
            <span className="font-bold">Key Features:</span>
            <ul className="list-outside list-disc pl-8 lg:pl-10">
              {repo.keyFeatures.map((feature, i) => (
                <li key={i} className="my-3 pl-1">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
        {repo.demoURL && repo.githubURL ? (
          <div className="text-lg">
            <p className="flex gap-4">
              Links:{' '}
              <a
                href={repo.demoURL.url}
                aria-label={`link to ${repo.demoURL.text}`}
                className="underline"
              >
                {repo.demoURL.text}
              </a>
              <span> | </span>
              <a
                href={repo.githubURL.url}
                aria-label={`link to ${repo.githubURL.text}`}
                className="underline"
              >
                {repo.githubURL.text}
              </a>
            </p>
          </div>
        ) : (
          <div className="text-lg">
            {repo.githubURL && (
              <p className="flex gap-4">
                Links:{' '}
                <a
                  href={repo.githubURL.url}
                  aria-label={`link to ${repo.githubURL.text}`}
                  className="underline"
                >
                  {repo.githubURL.text}
                </a>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function RepositoryShowcase({ repo }: { repo: Repository }) {
  if (repo.imgSrc) {
    return (
      <div
        key={repo.id}
        className="grid-flow-auto grid-row-2 grid gap-4 py-[6vw] md:py-[3vw] lg:grid-flow-row lg:grid-cols-2 lg:gap-2"
      >
        <Repository repo={repo} />
        <div className="order-1 place-content-center lg:order-2">
          <Image
            src={repo.imgSrc}
            alt={repo.imgAlt || `Project ${repo.title} image`}
            width={500}
            height={300}
            quality={100}
            unoptimized={true}
            className="w-[100dvw] rounded-sm"
          />
        </div>
      </div>
    )
  }

  // if (repo.code) {
  //   // const tree = refractor.highlight('"use strict";', 'js')
  //   const tree = refractor.highlight(repo.code.raw, 'python')
  //   console.log(tree)
  //   // const html = toHtml(tree)
  //   // console.log(html)
  //   const reactNode = toJsxRuntime(tree, { Fragment, jsxs, jsx })
  //   return (
  //     <div
  //       key={repo.id}
  //       className="grid-flow-auto grid-row-2 grid gap-4 py-8 lg:grid-flow-row lg:grid-cols-2 lg:gap-2 lg:py-24"
  //     >
  //       <Repository repo={repo} />
  //       <div className="order-1 place-content-center rounded-sm bg-gray-900 p-4 lg:order-2">
  //         {/* <Pre>
  //           <code>{reactNode}</code>
  //         </Pre> */}
  //         <pre className={`language-${repo.code.language}`}>
  //           <code>{reactNode}</code>
  //         </pre>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div className="flex flex-col gap-2 py-[2vw] md:py-[3vw]">
      <Repository repo={repo} />
    </div>
  )
}

export default function Random() {
  return (
    <>
      <div className="flex flex-col gap-6">
        <MainSectionContainer>
          <GradientAnimation
            className="rounded-sm"
            colorA={[FIREFLY[0] / 255, FIREFLY[1] / 255, FIREFLY[2] / 255]}
            colorB={[ASTRONAUT[0] / 255, ASTRONAUT[1] / 255, ASTRONAUT[2] / 255]}
            chaosLevel={1.5}
            scale={1.0}
          />
          <RepositoryShowcase repo={repositories[0]} />
        </MainSectionContainer>
        <MainSectionContainer>
          <GradientAnimation
            className="rounded-sm"
            colorA={[FIREFLY[0] / 255, FIREFLY[1] / 255, FIREFLY[2] / 255]}
            colorB={[INDIGO[0] / 255, INDIGO[1] / 255, INDIGO[2] / 255]}
            chaosLevel={1.5}
            scale={1.0}
          />
          <RepositoryShowcase repo={repositories[1]} />
        </MainSectionContainer>
        <MainSectionContainer>
          <GradientAnimation
            className="rounded-sm"
            colorA={[MARTINIQUE[0] / 255, MARTINIQUE[1] / 255, MARTINIQUE[2] / 255]}
            colorB={[DARK_MONZA_RED[0] / 255, DARK_MONZA_RED[1] / 255, DARK_MONZA_RED[2] / 255]}
            chaosLevel={1.5}
            scale={1.0}
          />
          <RepositoryShowcase repo={repositories[2]} />
        </MainSectionContainer>
      </div>
    </>
  )
}
