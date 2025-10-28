import React, { useEffect, useState } from "react";
import AuthLayout from "../layout/AuthLayout";
 
import ServicesBox from "./ServicesBox";

function list() {
 
  return (
    <AuthLayout>
       <ServicesBox />
    </AuthLayout>
  );
}

export default list;
