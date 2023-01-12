import { h, Component, render } from 'preact'

export const render_ = (run) => () => {
  class C extends Component {
    constructor(props) {
      super(props)
      props.run(this)()
    }
  
    render() {
      return this.state
    }
  }

  render(h(C, { run }, []), document.body)
}

export const html_ = (i) => (s) => () => {
  i.setState(s)
}

export const text_ = (t) => t

export const emptyProps_ = () => {}

export const insertAttr_ = (k) => (v) => (px) => {
  let res = { ...px }
  res[k] = v
  return res
}

export const insertHandler_ = (k) => (f) => (px) => {
  let res = { ...px }
  res['on' + k] = (e) => f(e)()
  return res
}

export const el_ = (tag) => (props) => (children) => {
  return h(tag, props, children)
}

export const eventTargetValue_ = (nothing) => (just) => (e) => {
  if (e.target && e.target.value) {
    return just(e.target.value)
  } else {
    return nothing
  }
}
