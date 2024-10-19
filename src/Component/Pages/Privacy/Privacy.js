import React from "react";
import { Assets } from "../../../Assets/Assets";
import Title from "../../Title/Title";

const Privacy = () => {
  return (
    <section className="position-relative">
      <div>
        <img
          src={Assets.bck_2}
          className="title_bck_img img-fluid"
          alt="background_img"
        />
        <Title title={"Privacy"} us={"Policy"} />
      </div>
      {/* Section Container */}
      <div className="d-flex flex-column align-items-center justify-content-center px-4 px-md-5">
        {/* Terms Container */}
        <div className="container py-5">
          <p className="mb-4 text-uppercase fw-bold">
            Last updated as of October 17, 2022
          </p>
          <div
            className="mb-4 bg-secondary w-100"
            style={{ height: "1px" }}
          ></div>

          {/* Term */}
          <div className="mb-4">
            <p className="text-uppercase fw-bold">Services</p>
            <p>
              Flowspark offers a range of design services, including but not
              limited to graphic design, web design, branding, and illustration.
              The Company will provide the agreed-upon services with
              professionalism and expertise, following industry standards and
              best practices. The specific details, deliverables, timelines, and
              pricing for each project will be...
            </p>
          </div>

          {/* Term */}
          <div className="mb-4">
            <p className="text-uppercase fw-bold">Client Responsibilities</p>
            <p>
              The client agrees to provide accurate and timely information,
              materials, and feedback necessary for the successful completion of
              the project. The client is responsible for obtaining any necessary
              permissions, licenses, or copyrights for materials provided to the
              Company for use in the project. The client acknowledges that
              delays or failures in providing required materials or feedback may
              impact project timelines and deliverables.
            </p>
          </div>

          {/* Term */}
          <div className="mb-4">
            <p className="text-uppercase fw-bold">Intellectual Property</p>
            <p>
              Any intellectual property rights, including but not limited to
              copyrights and trademarks, in the final deliverables created by
              the Company shall be transferred to the client upon receipt of
              full payment, unless otherwise agreed upon in writing. The client
              warrants that any materials provided to the Company for use in the
              project do not infringe upon the intellectual property rights of
              any third party.
            </p>
          </div>

          {/* Term */}
          <div className="mb-4">
            <p className="text-uppercase fw-bold">Payment</p>
            <p>
              The client agrees to pay the Company the agreed-upon fees for the
              services rendered. Payment terms, including the amount, method,
              and schedule, will be specified in the separate agreement or
              proposal. The Company reserves the right to suspend or terminate
              services in the event of non-payment or late payment.
            </p>
          </div>

          {/* Term */}
          <div className="mb-4">
            <p className="text-uppercase fw-bold">Confidentiality</p>
            <p>
              The Company and the client agree to keep confidential any
              proprietary or sensitive information disclosed during the course
              of the project. Both parties shall take reasonable measures to
              protect such information from unauthorized access or disclosure.
            </p>
          </div>

          {/* Term */}
          <div className="mb-4">
            <p className="text-uppercase fw-bold">Limitation of Liability</p>
            <p>
              The Company shall not be liable for any direct, indirect,
              incidental, or consequential damages arising out of the use or
              inability to use the services provided. The client acknowledges
              that the Company's liability is limited to the amount paid for the
              services rendered.
            </p>
          </div>

          {/* Term */}
          <div className="mb-4">
            <p className="text-uppercase fw-bold">Termination</p>
            <p>
              Either party may terminate this Agreement with written notice if
              the other party breaches any material provision and fails to
              remedy the breach within a reasonable time. In the event of
              termination, the client shall pay the Company for the services
              provided up to the termination date.
            </p>
          </div>

          {/* Term */}
          <div className="mb-4">
            <p className="text-uppercase fw-bold">Governing Law</p>
            <p>
              This Agreement shall be governed by and construed in accordance
              with the laws of [Your Jurisdiction]. Any disputes arising out of
              this Agreement shall be subject to the exclusive jurisdiction of
              the courts of [Your Jurisdiction].
            </p>
          </div>

          <div
            className="mb-5 bg-secondary w-100"
            style={{ height: "1px" }}
          ></div>
          <p>
            By accessing, browsing, or utilizing any design services,
            communication channels, or materials provided by Flowspark,
            including but not limited to graphic design, web design, branding,
            illustration, and user interface design, you expressly acknowledge,
            understand, and agree that you have carefully read, comprehended,
            and fully consent to be legally bound by these Terms of Service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
