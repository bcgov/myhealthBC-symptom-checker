import React, { useEffect, useState } from 'react';
import { Values } from '../types/Values';
import { PageProps } from '../types/PageProps';
import { useFormik } from 'formik';
import { FormButtons } from '../forms/FormButtons';

type Props = {
  initialValues: Values;
  onSubmit(values: Values): void;
  children: React.ReactElement<PageProps>[];
};

export const Wizard = (props: Props) => {
  const { children, initialValues, onSubmit } = props;
  const [page, setPage] = useState(0);
  const [activePage, setActivePage] = useState(children[0]);
  const [isLastPage, setLastPage] = useState(false);
  const [values, setValues] = useState(initialValues);

  const next = (values: Values) => {
    setValues(values);
    setPage(Math.min(page + 1, React.Children.count(children) - 1));
  };
  const previous = () => {
    setPage(Math.max(page - 1, 0));
  };

  const validate = (values: Values) => {
    const activePage = children[page];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  useEffect(() => {
    setLastPage(page === children.length - 1);
  }, [page]);

  useEffect(() => {
    setActivePage(children[page]);
  }, [page]);

  const handleSubmit = (values: Values) => {
    if (isLastPage) {
      console.log('submitted');
      return onSubmit(values);
    } else {
      next(values);
      formik.setSubmitting(false);
    }
  };

  const formik = useFormik<Values>({
    initialValues,
    validate,
    onSubmit: handleSubmit,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className='container h-full flex flex-col justify-center items-center bg-white shadow-md rounded '
    >
      <div className='w-full mb-20'>{activePage}</div>
      <FormButtons page={page} isLastPage={isLastPage} next={() => next(values)} prev={previous} />
    </form>
  );
};
