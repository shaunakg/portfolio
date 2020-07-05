import React from "react"
import { Link } from "gatsby"

import Image from "./image"
import SEO from "./seo"

const Hero = ({ content }) => {

    const { frontmatter, rawMarkdownBody } = content

    return (
        <>
            <SEO title="Home" />
            <h1 className="title">
                {frontmatter.greetings}{" "} 
                <span role="img" aria-label="emoji">
                    {frontmatter.emoji}
                </span> <br/>
                { frontmatter.title }
            </h1>

            <h2 className="subtitle">
                {frontmatter.subtitlePrefix}{" "}
                <span className="highlighted">{frontmatter.subtitleHighlight}</span>
            </h2>

            <div className="description">{rawMarkdownBody}</div>
            
            <Link to="/page-2/">Go to page 2</Link> <br />
        </>
    )
}

export default Hero
