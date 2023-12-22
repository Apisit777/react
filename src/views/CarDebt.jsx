import React from 'react'
import { useMemo } from 'react';
import Layout from './Layout';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import {
    Box,
    IconButton,
    Tooltip,
    Button
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {  useLoaderData, Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";

const CarDebt = () => {
    return (
        <>
            <Layout>
                <Outlet />
                {/* <div className='min-h-screen w-full justify-center items-center pr-64 text-xl font-semibold'>
                        <div className='pb-4'>
                          <Button component={Link} to="/admin/create" className="dark:text-white dark:bg-[#3061AF] shadow-md shadow-[#1061e3] dark:shadow-blue-500 duration-500" color="error">
                              เพิ่มภาระหนี้รถ
                          </Button>
                        </div>
                    <div className='min-h-screen flex justify-center items-center pt-24'>
                            <div className="form justify-center items-center bg-white dark:bg-[#202020] shadow-md shadow-[#202020] dark:shadow-blue-500 duration-500">
                              <div className="wrapper text-black">
                                <section id="one" className="page">
                                  <img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" alt="" />
                                  <h2>TITLE</h2>
                                    <h3>SUBTITLE</h3>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                    </p>
                                </section>
                              </div>
                            </div>
                    </div>
                </div> */}

                <div className='min-h-screen w-full justify-center items-center pl-8 pr-8 text-xl font-semibold'>
                <div className='pb-4 pt-24'>
                          <Button component={Link} to="create" className="dark:text-white dark:bg-[#3061AF] shadow-md shadow-[#1061e3] dark:shadow-blue-500 duration-500" color="error">
                              เพิ่มภาระหนี้รถ
                          </Button>
                        </div>
                  <div className='min-h-screen flex justify-center items-center pt-12'>
                    <div className="form justify-center items-center bg-white dark:bg-[#202020] shadow-md shadow-[#202020] dark:shadow-blue-500 duration-500">
                      <div className="flex justify-center items-center 2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm">
                          <h2 className="inline-block space-y-2 border-b border-black dark:border-blue-500">ประมาณการผ่อนโปรแกรม OPM</h2>
                      </div>
                      <div className=" text-black">
                        <section id="one" className="page">
                          <img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" alt="" />
                          <h2>TITLE</h2>
                            <h3>SUBTITLE</h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            </p>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
            </Layout>
        </>
    )
}

export default CarDebt
