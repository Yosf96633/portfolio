"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Link from "next/link";
interface CardProps {
  title: string;
  description: string;
  image: string;
  github_link: string;
  live_link: string;
}
export function ThreeDCardDemo(props: CardProps) {
  const { title, description, image, github_link, live_link } = props;
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1]bg-black border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={github_link}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal bg-white text-black "
          >
            View code
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
          >
            <a href={live_link}>Live Link</a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
