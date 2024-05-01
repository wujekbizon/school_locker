"use client";

import { useParams } from "next/navigation";

export default function CategoryTestPage() {
  const { value } = useParams();
  return <div>{value}</div>;
}
