import React, { useEffect, useState } from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
// import { BsInfoCircleFill, BsFillArrowLeftCircleFill, BsX } from 'react-icons/bs';
// import * as Popover from '@radix-ui/react-popover';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../container/components/Header/header';
import { asyncNewRecomendation } from '../states/recomendation/action';
import useLogin from '../hooks/useLogin';

const Recomendation = () => {
  useLogin();
  const [question, setQuestion] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeText = (e) => {
    let newQuestion = e.target.value;

    if (newQuestion.length > 500) newQuestion = newQuestion.slice(0, 500);

    setQuestion(newQuestion);
  };

  const onSubmit = async () => {
    try {
      const newQuestion = await dispatch(asyncNewRecomendation({ question }));
      if (newQuestion) navigate(`/recomendation/${newQuestion.id_question}`);
    } catch (error) {
      if (error.data === 'Unauthorized' || error.status === 401) navigate('/login');
    }
  };

  return (
    <>
      <Header iconLeft={<BsFillArrowLeftCircleFill color="white" />}>
        Recomendation
      </Header>
      <div className="h-screen mx-2">

        <div className="w-full  h-screen my-4">
          <textarea
            className="h-5/6 border-2 border-primary rounded-2xl resize-none focus:outline-2 focus:outline-primary p-3 w-full caret-primary"
            name="question"
            value={question}
            onChange={handleChangeText}
          />
          <div className="relative bottom-0 w-full items-center">
            <span className="text-xs float-right my-2 text-primary italic mr-4">
              { 500 - question.length }
              / 500
            </span>
            <button
              className="w-full bg-primary rounded-full py-2 text-white font-semibold"
              type="button"
              onClick={onSubmit}
            >
              Submit
            </button>
          </div>
        </div>

      </div>
    </>
  );
};
export default Recomendation;

{ /* <div className="w-full sticky top-0 z-10  bg-primary flex justify-between
px-4 py-2 items-center">
      <BsFillArrowLeftCircleFill color="white" />
      <p className="font-bold text-white tracking-wide">Jurusanku</p>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button type="button">
            <BsInfoCircleFill color="white" />
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className="rounded p-5 w-[260px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
            sideOffset={5}
          >
            <div className="flex flex-col gap-2.5">
              <p className="text-mauve12 text-[15px] leading-[19px] font-medium mb-2.5">How to use this feature ?</p>
              <fieldset className="flex gap-5 items-center">
                <label className="text-[13px] text-violet11 w-[75px]" htmlFor="width">
                  Width
                </label>
                <input
                  className="w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                  id="width"
                  defaultValue="100%"
                />
              </fieldset>
              <fieldset className="flex gap-5 items-center">
                <label className="text-[13px] text-violet11 w-[75px]" htmlFor="maxWidth">
                  Max. width
                </label>
                <input
                  className="w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                  id="maxWidth"
                  defaultValue="300px"
                />
              </fieldset>
              <fieldset className="flex gap-5 items-center">
                <label className="text-[13px] text-violet11 w-[75px]" htmlFor="height">
                  Height
                </label>
                <input
                  className="w-full inline-flex items-center justify-center flex-1 rounded px-2.5 text-[13px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[25px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                  id="height"
                  defaultValue="25px"
                />
              </fieldset>
              <fieldset className="flex gap-5 items-center">
                <label className="text-[13px] text-violet11 w-[75px]" htmlFor="maxHeight">
                  Max. height
                </label>
                <input
                  className="w-full inline-flex items-center justify-center flex-1
                  rounded px-2.5 text-[13px] leading-none text-violet11
                  shadow-[0_0_0_1px] shadow-violet7 h-[25px] focus:shadow-[0_0_0_2px]
                  focus:shadow-violet8 outline-none"
                  id="maxHeight"
                  defaultValue="none"
                />
              </fieldset>
            </div>
            <Popover.Close
              className="rounded-full h-[25px] w-[25px] inline-flex
              items-center justify-center text-violet11 absolute
              top-[5px] right-[5px] hover:bg-violet4 focus:shadow-[0_0_0_2px]
              focus:shadow-violet7 outline-none cursor-default"
              aria-label="Close"
            >
              <BsX />
            </Popover.Close>
            <Popover.Arrow className="fill-white" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>

    </div> */ }
