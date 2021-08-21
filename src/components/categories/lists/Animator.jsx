import React from "react";
import { motion } from "framer-motion";
import gd from "../Images/gd.png";
import "./gd.css";
const Animator = () => {
  return (
    <div>
      <motion.div className="webdev">
        <motion.h1
          className="graphic"
          initial={{ x: -1500 }}
          animate={{ x: 0 }}
          transition={{
            delay: 1.4,
            type: "spring",
            stiffness: 500,
          }}
        >
          Graphic
        </motion.h1>
        <motion.h1
          className="design"
          initial={{ x: 1500 }}
          animate={{ x: 0 }}
          transition={{
            delay: 1.4,
            type: "spring",
            stiffness: 500,
          }}
        >
          Designer
        </motion.h1>
      </motion.div>
      <div className="extra-space"></div>
      <div className="web-content">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 3,
          }}
          className="content"
        >
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 4.5,
              type: "spring",
            }}
            className="head"
          >
            <motion.hr
              initial={{ x: -1500 }}
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                delay: 5,
              }}
              className="top"
            ></motion.hr>
            <motion.hr
              initial={{ x: 1500 }}
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                delay: 5,
              }}
              className="right-top"
            />
            <motion.hr
              initial={{ x: -1500 }}
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                delay: 5,
              }}
              className="center"
            ></motion.hr>
            <motion.hr
              initial={{ x: 1500 }}
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                delay: 5,
              }}
              className="right-center"
            />
            <motion.hr
              initial={{ x: 1500 }}
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                delay: 5,
              }}
              className="left-bottom"
            />
            <motion.hr
              initial={{ x: 1500 }}
              animate={{ x: 0 }}
              transition={{
                delay: 5,
              }}
              className="right-bottom"
            />

            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 4.7,
                type: "spring",
                stiffness: 200,
              }}
              className="web-intro"
            >
              Graphic Designer
            </motion.h1>
          </motion.div>
        </motion.div>
        <div className="web-cont">
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">
              Step 1:- The Basics - Build Your Foundation{" "}
            </h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            You’ve loved to sketch, draw and paint your entire life – and having
            grown up in the world of social posts, hashtags, memes, and live
            streams – your computer skills are excellent too. So, when the time
            comes to choose a career, you’ve decided that a job in graphic
            design is not only going to ensure a steady paycheck but also allow
            you to combine your gift for creativity with your computer skills
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            A graphic designer works directly or indirectly for a client to
            create materials that align with the client’s brand, appeal to the
            target audience and, ultimately, please the client. An understanding
            of design theory, mastering specific commercial art skills, and
            learning industry standards should be the first objectives of all
            new designers who wish to set themselves apart from the amateur.
          </h3>
          <br></br>
          <center>
            <h3
              style={{
                marginTop: 10,
                marginLeft: 5,
                lineHeight: 1.8,
                color: "goldenrod",
              }}
            >
              Skills
            </h3>
          </center>
          <br></br>
          <center>
            <table className="skill">
              <tr>
                <td>
                  <h3
                    style={{ marginTop: 10, marginLeft: 25, lineHeight: 2.8 }}
                  >
                    {" "}
                    Basic Drawing
                  </h3>
                </td>
                <td>
                  <h3
                    style={{ marginTop: 10, marginLeft: 35, lineHeight: 2.8 }}
                  >
                    {" "}
                    Graphic Design Theory
                  </h3>
                </td>
              </tr>
              <tr>
                <td>
                  <h3
                    style={{ marginTop: 10, marginLeft: 25, lineHeight: 2.8 }}
                  >
                    {" "}
                    Layout and Structuring
                  </h3>
                </td>
                <td>
                  <h3
                    style={{ marginTop: 10, marginLeft: 35, lineHeight: 2.8 }}
                  >
                    {" "}
                    Fonts and Type
                  </h3>
                </td>
              </tr>
              <tr>
                <td>
                  <h3
                    style={{ marginTop: 10, marginLeft: 25, lineHeight: 2.8 }}
                  >
                    {" "}
                    User Experience
                  </h3>
                </td>
                <td>
                  <h3
                    style={{ marginTop: 10, marginLeft: 35, lineHeight: 2.8 }}
                  >
                    {" "}
                    Website Design Best Practices
                  </h3>
                </td>
              </tr>
              <tr>
                <td>
                  <h3
                    style={{ marginTop: 10, marginLeft: 25, lineHeight: 2.8 }}
                  >
                    {" "}
                    Professional Copywriting
                  </h3>
                </td>
                <td>
                  <h3
                    style={{ marginTop: 10, marginLeft: 35, lineHeight: 2.8 }}
                  >
                    {" "}
                    The Art of Critique
                  </h3>
                </td>
              </tr>
            </table>
          </center>
          <br></br>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Step 2:- Master the Software </h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Computer design skills are vital in creating professional layouts.
            To become proficient, the designer needs a high degree of skill in
            the industry’s standard software programs, usually acquired through
            long hours of practice. You need to get comfortable with the
            software to create designs quickly and up to industry standards.
            Whether you are preparing images for website use or laying out a
            brochure for the printer, a graphic designer must know the right
            size, format, and dimensions for every different kind of project a
            client may need.
          </h3>
          <br></br>
          <center>
            <h3
              style={{
                marginTop: 10,
                marginLeft: 5,
                lineHeight: 1.8,
                color: "goldenrod",
              }}
            >
              Learn Adobe Photoshop
            </h3>
          </center>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            If you need to edit or adjust an image, Photoshop is your go-to
            program.{" "}
            <a
              href="https://www.adobe.com/products/photoshop.html"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Photoshop
            </a>{" "}
            works with rasterized images that allow manipulation of individual
            pixels. This ability makes Photoshop suitable for photographic
            imagery, but not for website design, logos, fonts or any other type
            of graphic design work. You can use Photoshop to swap parts of
            images to change out a face, for example, or to insert a background
            or edit flaws in a photo. From healing brushes, lasso tools,
            feathering and burning, you need to understand and be able to use
            the numerous editing tools that Photoshop offers to edit images at a
            true professional level for your client. A good designer will not
            rely on stock images, since they are often generic and do not
            promote the brand.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 15, lineHeight: 1.8 }}>
            Free course :-{" "}
            <a
              href="https://www.youtube.com/playlist?list=PLW-zSkCnZ-gA5Jn6gZtUa6-aG0OoRZyb6"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Adobe Photoshop
            </a>
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 15, lineHeight: 1.8 }}>
            Paid course :-{" "}
            <a
              href="https://www.adobe.com/in/products/captivateprime/content-catalog/creative-cloud/photoshop-cc.html"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Adobe Photoshop
            </a>
          </h3>
          <br></br>
          <center>
            <h3
              style={{
                marginTop: 10,
                marginLeft: 5,
                lineHeight: 1.8,
                color: "goldenrod",
              }}
            >
              Learn Adobe Illustrator
            </h3>
          </center>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            When a client needs a logo or an illustration, you will likely use
            Illustrator to complete the project.{" "}
            <a
              href="https://www.adobe.com/products/illustrator.html"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Illustrator
            </a>{" "}
            works with vector art, creating lines that can be expanded in size
            but still not lose clarity. A logo created in Illustrator, for
            example, can be used on both a business card, on which it’s no large
            than an inch high and on a billboard, where it appears 10 feet high.
            Illustrator has an extremely complicated line, gradient, and
            coloring tools that allow the user to make complicated projects.
            Like Photoshop, Illustrator, created as a tool with professionals in
            mind, is not an intuitive program to beginners. This program does
            not handle raster images well and will quickly get bogged down if
            you try to drop photos into your design.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 15, lineHeight: 1.8 }}>
            Free course :-{" "}
            <a
              href="https://www.youtube.com/playlist?list=PLW-zSkCnZ-gCq0DjkzY-YapCBEk0lA6lR"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Adobe Illustrator
            </a>
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 15, lineHeight: 1.8 }}>
            Paid course :-{" "}
            <a
              href="https://www.udemy.com/topic/adobe-illustrator/"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Adobe Illustrator
            </a>
          </h3>
          <br></br>
          <center>
            <h3
              style={{
                marginTop: 10,
                marginLeft: 5,
                lineHeight: 1.8,
                color: "goldenrod",
              }}
            >
              Learn Adobe InDesign
            </h3>
          </center>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            For projects that combine rasterized images with vector elements,
            you need a program that handles both effectively.{" "}
            <a
              href="https://www.adobe.com/products/indesign.html"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              InDesign
            </a>{" "}
            effectively allows you to organize your text, create layout formats,
            insert image placeholders and then save the file in a format
            designed for professional printing. If you are creating the
            mechanical for a brochure layout to go to press, for example, you
            will save your final project into a folder that contains copies of
            your fonts and images as well as the design file. Because the
            program is essentially adding “placeholders” instead of real images,
            you can create a large number of pages without the program bogging
            down due to its size. Once you’ve learned Illustrator and Photoshop,
            InDesign is somewhat easier to learn, but it is still quite
            different from most tools and should be practiced until you gain
            proficiency.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 15, lineHeight: 1.8 }}>
            Free course :-{" "}
            <a
              href="https://www.youtube.com/watch?v=RXRT3dHu6_o"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Adobe InDesign
            </a>
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 15, lineHeight: 1.8 }}>
            Paid course :-{" "}
            <a
              href="https://www.udemy.com/topic/indesign/"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Adobe InDesign
            </a>
          </h3>
          <br></br>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">
              Step 3:- Earn a Degree in Graphic Design or Related Field{" "}
            </h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            We've all heard stories about people throwing off the chains of a
            bachelor's degree to start multi-million dollar businesses. People
            like Steve Jobs and Mark Zuckerberg dropped out of college and went
            on to create companies that changed the world we live in. These
            stories reinforce the idea that a college education isn't necessary
            - all you really need is old-fashioned grit, originality, and
            natural talent to succeed. Stories like this beg the question, are
            those who go straight into business after high school as likely to
            succeed as those who pursue higher education? What do the numbers
            say?
          </h3>
          <br></br>
          <center>
            <h3
              style={{
                marginTop: 10,
                marginLeft: 5,
                lineHeight: 1.8,
                color: "goldenrod",
              }}
            >
              The Value of a Degree
            </h3>
          </center>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            <a
              href="https://www.insidehighered.com/news/2019/06/10/new-data-show-economic-value-earning-bachelors-degree-remains-high"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Labor statistics
            </a>{" "}
            conclusively show that students who pursue a bachelor's degree earn
            significantly more over the course of their career than those whose
            highest degree is a high school diploma. The lifetime earnings gap
            between college graduates and those without a degree continues to
            widen, as employers demand more skilled talent.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            While it's true that not every job in the design industry requires a
            graphic design degree, it is also true that some skills are very
            hard to learn on your own. A degree in graphic design from a
            reputable university demonstrates to clients, advertising agencies,
            and other employers that you are a serious professional who has put
            in the effort required to be successful.
          </h3>
          <br></br>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Step 4:- Choose an Area of Specialization </h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Having a niche helps narrow your focus to a single area, so you can
            get really good at what you do. For many graphic design firms, it is
            important to have a solid understanding of all aspects of graphic
            design, but a focus sets you apart from the rest of the
            professionals. If you plan to work as a freelancer, you want a very
            specific focus so that firms or companies are eager to hire you
            instead of other professionals in that area.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            A few popular areas of specialization include:
          </h3>
          <br></br>
          <center>
            <h3
              style={{
                marginTop: 10,
                marginLeft: 5,
                lineHeight: 1.8,
                color: "goldenrod",
              }}
            >
              Logo Design
            </h3>
          </center>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Being able to pinpoint the direction of a company and succinctly
            conceptualize it in a memorable logo is no easy task. Graphic
            designers work to{" "}
            <a
              href="https://www.theartcareerproject.com/careers/logo-design/"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              create logos
            </a>{" "}
            that are unique but yet still express purpose and meaning to the
            target audience takes not only the ability to think creatively but
            also a deep understanding of design history combined with a lot of
            skill and practice. Logos have to be instantly recognizable, with
            the ability to be scalable for both small and large branded
            materials.
          </h3>
          <br></br>
          <center>
            <h3
              style={{
                marginTop: 10,
                marginLeft: 5,
                lineHeight: 1.8,
                color: "goldenrod",
              }}
            >
              Web Design and Digital Design
            </h3>
          </center>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            <a
              href="https://www.theartcareerproject.com/become/web-designer/"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Web and digital design
            </a>{" "}
            are growing quickly in importance. Today, brands without websites or
            digital advertising lose a lot of business. Some estimates compare
            the lack of a website to closing the bricks-and-mortar location for
            an additional day each week. Digital designers must stay current
            with design and technology trends. A talented graphic designer with
            a niche in digital and web design must be able to understand the
            innate expectations of internet visitors, creating layouts and ads
            that are easily navigable and that function correctly.
          </h3>
          <br></br>
          <center>
            <h3
              style={{
                marginTop: 10,
                marginLeft: 5,
                lineHeight: 1.8,
                color: "goldenrod",
              }}
            >
              Multimedia Design
            </h3>
          </center>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            With a wide number of formats and platforms, some graphic designers
            choose to focus on creating designs that work across multiple forms
            of media. You may prefer to focus on video and audio to help produce
            commercials, tutorials, and podcasts for your clients.
          </h3>
          <br></br>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Step 5:- Build a Stand-Out Portfolio</h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Your portfolio proves your skills and understanding of the industry.
            Your graphic design program should help you develop an impressive
            portfolio that helps you get a job (or internship) as soon as you
            graduate. You want to focus on quality over quantity, choosing your
            very best work to showcase to clients or potential employers. A
            portfolio should include a handful (often about 10 to 12 examples)
            of your best work that demonstrates your abilities and niche skills
            and interests.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Many students create mock ads, logos, and graphic design projects
            for fake companies or even fake projects for real companies. A
            student may choose an existing company’s materials and rework them
            for the sole purpose of displaying his or her talent in identifying
            and addressing the target audience. When you’ve worked in the
            industry or have worked on real projects as an intern, then you will
            likely want to include projects that demonstrate your ability to
            work for a real-world client. Some graphic design students volunteer
            their talents to organizations or local brands to work on projects
            for their portfolios. Others may be able to pick up graphic design
            projects for local companies with very small budgets that will pay
            an amateur rate for a project perfect for display in a portfolio.
          </h3>
          <br></br>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Visual Representation</h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          <center>
            <img src={gd} className="webdev-image" alt="webdev-roadmap"></img>
          </center>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Animator;
