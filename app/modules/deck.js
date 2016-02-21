import bespoke from 'bespoke'
import classes from 'bespoke-classes'
import keys from 'bespoke-keys'

const plugins = [
  keys(),
  classes()
]

export default (element) => {
  bespoke.from(element, plugins)
}
