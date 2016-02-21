import bespoke from 'bespoke'
import classes from 'bespoke-classes'
import keys from 'bespoke-keys'
import touch from 'bespoke-touch'

const plugins = [
  classes(),
  keys(),
  touch()
]

export default (element) => {
  bespoke.from(element, plugins)
}
