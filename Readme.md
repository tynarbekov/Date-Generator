Most of the time I spent on task 7, and a little more was not enough for one task.

1:
```js
/* setState is an async function.
 React may batch a bunch of setStates together.
So the value of this.state.value is the value at the time you make the request.
*/
decreaseValue() {
  const { step } = this.props
  this.setState( prev => ({
    value: prev.value - step
  }))
}
```
