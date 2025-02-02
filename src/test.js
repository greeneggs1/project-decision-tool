function MyTestApp() {
  return React.createElement('h1', null, 'Hello, UMD React!');
}

ReactDOM.render(
  React.createElement(MyTestApp, null),
  document.getElementById('root')
);
