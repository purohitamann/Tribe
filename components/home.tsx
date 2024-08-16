import React from 'react'
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import demoLinks from '@/components/demoLinks';
import DemoLinks from '@/components/demoLinks';
export default function home() {
    return (
        <div>
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                <div className="inline-block max-w-lg text-center justify-center">
                    <h1 className={title({ color: "yellow" })}>#</h1>
                    <h1 className={title()}>MakeYour</h1>
                    <h1 className={title({ color: "yellow" })}>Tribe&nbsp;</h1>
                    <br />
                    <h1 className={title()}>
                        Build Your Community.
                    </h1>
                    <h4 className={subtitle({ class: "mt-4" })}>
                        Through Trivia and Events.
                    </h4>
                </div>

                <div className="flex gap-3">
                    <Link
                        isExternal
                        className={buttonStyles({
                            color: "warning",
                            radius: "full",
                            variant: "shadow",
                            size: "lg",

                        })}
                        href={siteConfig.links.docs}
                    >
                        Join Tribe
                    </Link>

                    {/* <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link> */}
                </div>
                <div>
                    <DemoLinks />
                </div>

                {/* <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing{" "}
              <Code color="primary">pages/index.tsx</Code>
            </span>
          </Snippet>
        </div> */}

            </section>
        </div>
    )
}


