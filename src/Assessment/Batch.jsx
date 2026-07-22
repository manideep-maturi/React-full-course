import React from "react";
import Branchhead from "./Branchhead";

const Batch = () => {
  const batchCode = "JFSD-101";
  const yop = 2026;
  const placementStatus = "Open For Placements";
  const noteMessage = "Admissions Closing Soon";

  return (
    <Branchhead
      batchCode={batchCode}
      yop={yop}
      placementStatus={placementStatus}
      noteMessage={noteMessage}
    />
  );
};

export default Batch;
