import React from 'react'
import ReactDOM from 'react-dom'
import MathJax from '../../src/index'

class App extends React.Component {
  render() {
    const ascii = 'U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))'
    const tex = 'f(x) = \\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi'

    return (
      <div>
        <MathJax.Context input="ascii">
          <div>
            <MathJax.Node>{ascii}</MathJax.Node>
          </div>
        </MathJax.Context>

        <MathJax.Context input="ascii">
          <div>
            This is an inline formula written in AsciiMath: <MathJax.Node inline>{ascii}</MathJax.Node>
          </div>
        </MathJax.Context>

        <MathJax.Context input="tex">
          <div>
            <MathJax.Node>{tex}</MathJax.Node>
          </div>
        </MathJax.Context>

        <MathJax.Context input="tex">
          <div>
            This is an inline formula written in AsciiMath: <MathJax.Node inline>{tex}</MathJax.Node>
          </div>
        </MathJax.Context>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />,
  </React.StrictMode>,
  document.getElementById('root')
)
