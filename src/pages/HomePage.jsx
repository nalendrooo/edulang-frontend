import React from 'react';
import {
  BsFillBellFill,
  BsX,
  BsStack,
  BsBank,
  BsMortarboardFill,
} from 'react-icons/bs';
import * as Popover from '@radix-ui/react-popover';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { Link } from 'react-router-dom';
import Menu from '../container/components/Menu/menu';
import useLogin from '../hooks/useLogin';

const HomePage = () => {
  useLogin();
  return (
    <>
      <div className="container flex flex-col justify-between w-full min-h-screen mx-auto overflow-y-scroll overflow-x-hidden">
        <div className="w-full h-[200px] rounded-b-[40px] bg-primary relative">
          <div className="flex m-7 justify-between">
            <div>
              <div className="font-bold text-xl mb-2">
                <div className="text-[#FCCF47] tracking-wide">Welcome,</div>
                <div className="text-white tracking-wide">Nalendro Adil</div>
              </div>
              <p className="text-xs text-white">Temukan jurusan impian anda !</p>
            </div>
            <div>
              <Popover.Root>
                <Popover.Trigger asChild>
                  <div className="relative">
                    <button type="button">
                      <BsFillBellFill color="white" size={18} />
                    </button>
                    <div className="bg-[#FCCF47] absolute top-1 right-[-4px] transform -translate-x-1/2 -translate-y-1/2 rounded-full w-2 h-2" />
                  </div>

                </Popover.Trigger>
                <Popover.Portal>
                  <Popover.Content
                    className="mr-2 rounded-lg p-5 w-[260px] bg-white shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.slate-600)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade"
                    sideOffset={5}
                  >
                    <div className="flex flex-col gap-2.5">
                      <p className="text-mauve12 text-[15px] leading-[19px] font-medium mb-2.5">Notification</p>
                      <div>
                        <ScrollArea.Root className="w-full h-[500px] rounded overflow-hidden  bg-white">
                          <ScrollArea.Viewport className="w-full h-full rounded">
                            <div className="py-[15px]">
                              <div className=" bg-sky-100 rounded p-2 mb-2">
                                <div className="text-xs right font-semibold mb-2  rounded">Monday, 19 August 2023</div>
                                <div className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta consectetur harum explicabo hic eaque omnis magni autem sapiente, minima!</div>
                              </div>
                              <hr />
                              <div className="  rounded p-2 mb-2">
                                <div className="text-xs right font-semibold mb-2  rounded">Friday, 02 August 2023</div>
                                <div className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Solutaa maiores amet nisi aliquid pariatur vitae, eveniet atque repellendus quod enim eos deserunt consequatur quis. Obcaecati, quo sequi? Dignissimos quam est distinctio sunt neque asperiores. Eveniet minus quod sed minima!</div>
                              </div>
                              <hr />
                              <div className=" rounded p-2 mb-2">
                                <div className="text-xs right font-semibold mb-2  rounded">Sunday, 28 July 2023</div>
                                <div className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta consectetur harum explicabo hic eaque omnis magni autem sapiente, facilis mollitia maiores amet nisi aliquid pariatur vitae, eveniet atque repellendus quod enim eos deserunt consequatur quis. Obcaecati, quo sequi? Dignissimos quam est distinctio sunt neque asperiores. Eveniet minus quod sed minima!</div>
                              </div>
                            </div>
                          </ScrollArea.Viewport>
                          <ScrollArea.Scrollbar
                            className="flex select-none touch-none p-0.5  transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                            orientation="vertical"
                          >
                            <ScrollArea.Thumb className="flex-1 bg-slate-400 rounded-full relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
                          </ScrollArea.Scrollbar>

                        </ScrollArea.Root>
                        <div className="text-center text-blue-500 text-xs mt-1 underline">Mark as view all</div>
                      </div>

                    </div>
                    <Popover.Close
                      className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 absolute top-[5px] right-[5px] hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 outline-none cursor-default"
                      aria-label="Close"
                    >
                      <BsX />
                    </Popover.Close>
                    <Popover.Arrow className="fill-white" />
                  </Popover.Content>
                </Popover.Portal>
              </Popover.Root>

            </div>

          </div>
          <div
            className="w-80 bg-white rounded-lg mx-auto flex justify-evenly shadow-custom-shadow"
          >
            <div className="text-center my-4">
              <Link to="/recomendation" className="bg-primary block px-8 py-3 mb-2 rounded-lg"><BsStack color="white" size={25} /></Link>
              <p className="text-xs font-semibold text-slate-600">Jurusanku</p>
            </div>
            <div className="text-center  my-4">
              <Link to="/search/university" className="bg-primary block px-8 py-3 mb-2 rounded-lg"><BsBank color="white" size={25} /></Link>
              <p className="text-xs font-semibold text-slate-600">Cari Kampus</p>
            </div>
            <div className="text-center  my-4">
              <div className="bg-primary px-8 py-3 mb-2 rounded-lg"><BsMortarboardFill color="white" size={25} /></div>
              <p className="text-xs font-semibold text-slate-600">Beasiswa</p>
            </div>
          </div>
          <div className="mx-7">
            <div>
              <div className="uppercase font-bold mt-5 text-slate-600">Forum Diskusi</div>

              <div className="flex overflow-x-scroll snap-mandatory scroll-smooth mt-2 mb-4 gap-2">

                <div className="flex gap-2  snap-start bg-primary text-white rounded-xl p-2">
                  <div className="w-[50px]">
                    <img src="https://picsum.photos/50/50" alt="" className="rounded-full border-2 border-white" />
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold mb-1">Satya Wicna</div>
                    <div>
                      Lorem, ipsum dolor sit amet consectetur
                    </div>
                  </div>
                </div>
                <div className="flex gap-2  snap-start bg-primary text-white rounded-xl p-2">
                  <div className="w-[50px]">
                    <img src="https://picsum.photos/50/50" alt="" className="rounded-full border-2 border-white" />
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold mb-1">Satya Wicna</div>
                    <div>
                      Lorem, ipsum dolor sit amet consectetur
                    </div>
                  </div>
                </div>
                <div className="flex gap-2  snap-start bg-primary text-white rounded-xl p-2">
                  <div className="w-[50px]">
                    <img src="https://picsum.photos/50/50" alt="" className="rounded-full border-2 border-white" />
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold mb-1">Satya Wicna</div>
                    <div>
                      Lorem, ipsum dolor sit amet consectetur
                    </div>
                  </div>
                </div>
                <div className="flex gap-2  snap-start bg-primary text-white rounded-xl p-2">
                  <div className="w-[50px]">
                    <img src="https://picsum.photos/50/50" alt="" className="rounded-full border-2 border-white" />
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold mb-1">Satya Wicna</div>
                    <div>
                      Lorem, ipsum dolor sit amet consectetur
                    </div>
                  </div>
                </div>
                <div className="flex gap-2  snap-start bg-primary text-white rounded-xl p-2">
                  <div className="w-[50px]">
                    <img src="https://picsum.photos/50/50" alt="" className="rounded-full border-2 border-white" />
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold mb-1">Satya Wicna</div>
                    <div>
                      Lorem, ipsum dolor sit amet consectetur
                    </div>
                  </div>
                </div>
                <div className="flex gap-2  snap-start bg-primary text-white  border-slate-600 rounded-xl p-2">
                  <div className="w-[50px]">
                    <img src="https://picsum.photos/50/50" alt="" className="rounded-full border-2 border-white" />
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold mb-1">Angga Saputra</div>
                    <div>
                      Lorem, ipsum dolor sit amet consectetur
                    </div>
                  </div>
                </div>

                <div className="flex gap-2  snap-start bg-primary text-white  border-slate-600 rounded-xl p-2">
                  <div className="w-[50px]">
                    <img src="https://picsum.photos/50/50" alt="" className="rounded-full border-2 border-white" />
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold mb-1">Angga Saputra</div>
                    <div>
                      Lorem, ipsum dolor sit amet consectetur
                    </div>
                  </div>
                </div>

              </div>

            </div>
            <div>
              <div className="uppercase font-bold text-slate-700">Beasiswa Terbaru</div>
              <div className="pb-10">
                <div className="w-full p-4 rounded-xl  mt-2 mb-4 shadow-xl border mb-50">
                  <div className="w-100 overflow-hidden h-40 bg-slate-200 rounded-lg"><img src="https://picsum.photos/700/500" alt="" /></div>
                  <div className="mt-2">
                    <div className="font-semibold">Beasiswa Pertamina</div>
                    <div className="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque expedita voluptatem quibusdam magnam assumenda sunt cumque soluta ipsa vero unde.</div>
                  </div>
                </div>
                <div className="w-full p-4 rounded-xl shadow-xl border my-4">
                  <div className="w-100 overflow-hidden h-40 bg-slate-200 rounded-lg"><img src="https://picsum.photos/700/500" alt="" /></div>
                  <div className="mt-2">
                    <div className="font-semibold">Beasiswa Pertamina</div>
                    <div className="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque expedita voluptatem quibusdam magnam assumenda sunt cumque soluta ipsa vero unde.</div>
                  </div>
                </div>
                <div className="w-full p-4 rounded-xl shadow-xl border my-4">
                  <div className="w-100 overflow-hidden h-40 bg-slate-200 rounded-lg"><img src="https://picsum.photos/700/500" alt="" /></div>
                  <div className="mt-2">
                    <div className="font-semibold">Beasiswa Pertamina</div>
                    <div className="text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque expedita voluptatem quibusdam magnam assumenda sunt cumque soluta ipsa vero unde.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Menu />
    </>
  );
};

export default HomePage;
