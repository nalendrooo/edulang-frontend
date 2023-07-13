import React, { useEffect } from 'react';
import { BsFillArrowLeftCircleFill, BsFillEmojiFrownFill } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Menu from '../container/components/Menu/menu';
import { asyncGetAnswer } from '../states/answer/action';
import useLogin from '../hooks/useLogin';
import Header from '../container/components/Header/header';

const Answer = () => {
  useLogin();
  const { idQuestion } = useParams('idQuestion');
  const dispatch = useDispatch();
  const answer = useSelector((state) => state.answer);

  useEffect(() => {
    dispatch(asyncGetAnswer(idQuestion));
  }, [idQuestion]);
  return (
    <>
      <div className="min-h-screen overflow-y-scrol relative bg-gradient-to-tr from-[#56d6e4] to-transparent via-transparent">
        <Header iconLeft={<BsFillArrowLeftCircleFill color="white" />}>
          Recomendation
        </Header>

        <div className="m-4 text-white tracking-wide">
          { answer.question
          && (
          <div className="text-primary border-2 border-primary rounded-2xl p-2 text-xs mb-4  ">
            { answer.question }
          </div>
          )}

          { answer.answer
            ? answer.answer.map((item) => (

              <div
                key={item.prodi}
                className="bg-primary rounded-2xl px-4 py-2 mb-2"
              >
                <p className="text-xs font-bold mb-1">{ item.prodi}</p>
                <p className="text-xs mb-2">
                  { item.university }
                  {' '}
                  Pilihan Universitas
                </p>
                <div className="flex justify-between text-xs items-center">
                  <meter className="w-full mr-2" min="0" low="30" high="60" max="100" optimum="50" value={item.precentace} />
                  <p>
                    {item.precentace}
                    %
                  </p>
                </div>
              </div>
            ))
            : (
              <div className="flex justify-center items-center">
                <div className="flex flex-col items-center">
                  <BsFillEmojiFrownFill color="#24B0C1" size={60} />
                  <p className="text-xs text-center text-slate-600 italic mt-4">Rekomendasi prodi tidak ditemukan:(</p>
                </div>
              </div>
            )}

        </div>

      </div>
      <Menu />
    </>
  );
};

export default Answer;
