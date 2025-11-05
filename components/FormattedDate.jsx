import React from 'react'

function FormattedDate({date}) {
     const parsedDate = new Date(date);
     const formattedDate = parsedDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
  });
    return formattedDate
}

export default FormattedDate;