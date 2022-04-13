import { Route, Redirect } from 'react-router-dom'

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {

  const loading = false;
//  const signed = true;

  if (loading) {
    return (
      <div></div>
    )
  }
/*
  if (!signed && isPrivate) {
    return <Redirect to="/" />
  }

  if (signed && !isPrivate) {
    return <Redirect to="/mentorias" />
  }

*/
  return (
    <Route
      {...rest}
      render={props => (
        <>
          <Component {...props} />
        </>
      )}
    />
  )
}
