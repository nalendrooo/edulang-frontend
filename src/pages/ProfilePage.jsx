import React from 'react';
import {
  BsFillBellFill,
  BsChevronDoubleRight,
} from 'react-icons/bs';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Menu from '../container/components/Menu/menu';
import { asyncAuthUserLogout } from '../states/auth/action';
import useLogin from '../hooks/useLogin';

const ProfilePage = () => {
  useLogin();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    try {
      const logout = dispatch(asyncAuthUserLogout());
      if (logout) navigate('/login');
    } catch (error) {
      if (error.data === 'Unauthorized' || error.status === 401) navigate('/login');
    }
  };

  return (
    <>
      <div className="relative min-h-screen bg-white overflow-y-scrol to-transparent via-transparent">
        <div className="w-full h-max rounded-b-[40px] bg-primary relative">
          <div className="flex gap-2 px-10 py-10 w-max">
            <div>
              <img src="https://picsum.photos/50/50" alt="profile" className="border-2 border-white rounded-full" />
            </div>
            <div>
              <div className="mb-2">
                <span className="block font-semibold text-white">Nalendro Adil</span>
                <span className="block text-xs text-white">nalendroadil274@gmail.com</span>
              </div>
              <span className="p-1 px-2 text-xs font-semibold rounded-md bg-accent">Edit Profile</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between px-4 py-3 mx-4 mt-2 text-white bg-red-500 rounded-lg w-100">
          <div className="flex gap-4">
            <BsFillBellFill />
            <p className="text-sm">Warning ! Lengkapi profile anda</p>
          </div>
          <BsChevronDoubleRight />
        </div>
        <div className="flex flex-col w-full gap-2 p-4">
          <p className="mx-auto text-sm font-semibold">Account</p>
          <div className="flex items-center justify-between px-4 py-2 border rounded-lg w-100 border-primary">
            <div className="flex gap-4">
              <BsFillBellFill />
              <p className="text-sm">Pengaturan</p>
            </div>
            <BsChevronDoubleRight />
          </div>
          <div className="flex items-center justify-between px-4 py-2 border rounded-lg w-100 border-primary">
            <div className="flex gap-4">
              <BsFillBellFill />
              <p className="text-sm">Pengaturan</p>
            </div>
            <BsChevronDoubleRight />
          </div>
          <div className="flex items-center justify-between px-4 py-2 border rounded-lg w-100 border-primary">
            <div className="flex gap-4">
              <BsFillBellFill />
              <p className="text-sm">Pengaturan</p>
            </div>
            <BsChevronDoubleRight />
          </div>

          <hr className="mx-auto my-4 border rounded-full w-60 border-secondary" />

          <p className="mx-auto text-sm font-semibold">More</p>
          <div className="flex items-center justify-between px-4 py-2 border rounded-lg w-100 border-primary">
            <div className="flex gap-4">
              <BsFillBellFill />
              <p className="text-sm">Pengaturan</p>
            </div>
            <BsChevronDoubleRight />
          </div>
          <div className="flex items-center justify-between px-4 py-2 border rounded-lg w-100 border-primary">
            <div className="flex gap-4">
              <BsFillBellFill />
              <p className="text-sm">Pengaturan</p>
            </div>
            <BsChevronDoubleRight />
          </div>
          <div className="flex items-center justify-between px-4 py-2 border rounded-lg w-100 border-primary">
            <div className="flex gap-4">
              <BsFillBellFill />
              <p className="text-sm">Pengaturan</p>
            </div>
            <BsChevronDoubleRight />
          </div>
          <div className="flex items-center justify-between px-4 py-2 border rounded-lg w-100 border-primary">
            <div className="flex gap-4">
              <BsFillBellFill />
              <p className="text-sm">Pengaturan</p>
            </div>
            <BsChevronDoubleRight />
          </div>
          <div className="flex items-center justify-between px-4 py-2 border rounded-lg w-100 border-primary">
            <div className="flex gap-4">
              <BsFillBellFill />
              <p className="text-sm">Pengaturan</p>
            </div>
            <BsChevronDoubleRight />
          </div>
          <div className="flex items-center justify-between px-4 py-2 border rounded-lg w-100 border-primary">
            <div className="flex gap-4">
              <BsFillBellFill />
              <p className="text-sm">Pengaturan</p>
            </div>
            <BsChevronDoubleRight />
          </div>
        </div>

        <div className="p-4">
          <AlertDialog.Root>
            <AlertDialog.Trigger asChild>
              <button
                className="w-full py-2 font-semibold text-white rounded-full bg-primary"
                type="button"
              >
                Logout
              </button>
            </AlertDialog.Trigger>
            <AlertDialog.Portal>
              <AlertDialog.Overlay className="bg-slate-600 opacity-50 data-[state=open]:animate-overlayShow fixed inset-0" />
              <AlertDialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                <AlertDialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                  Apakah anda yakin untuk keluar?
                </AlertDialog.Title>
                <AlertDialog.Description className="text-slate-600 mt-4 mb-5 text-sm leading-normal">
                  Semua sesi ini akan berakhir,
                  selanjutnya anda harus melakukan login kembali.
                </AlertDialog.Description>
                <div className="flex justify-end gap-[25px]">
                  <AlertDialog.Cancel asChild>
                    <button
                      type="button"
                      className="text-white bg-slate-400  rounded-lg px-[15px] text-sm leading-none outline-none focus:shadow-[0_0_0_2px]"
                    >
                      Cancel
                    </button>
                  </AlertDialog.Cancel>
                  <AlertDialog.Action asChild>
                    <button
                      type="button"
                      className="text-white bg-red-500 inline-flex h-[35px] items-center  rounded-lg px-[15px] text-sm leading-none outline-none focus:shadow-[0_0_0_2px]"
                      onClick={onLogout}
                    >
                      Ya, Logout
                    </button>
                  </AlertDialog.Action>
                </div>
              </AlertDialog.Content>
            </AlertDialog.Portal>
          </AlertDialog.Root>

        </div>
      </div>

      <Menu />
    </>
  );
};

export default ProfilePage;
