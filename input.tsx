
import * as React from "react";

export function Input(props: any) {
  return <input {...props} className={`px-3 py-2 rounded-md text-sm ${props.className}`} />;
}
