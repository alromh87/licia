/* Inherit the prototype methods from one constructor into another.
 *
 * |Name      |Type    |Desc       |
 * |-------------------------------|
 * |Class     |function|Child Class|
 * |SuperClass|function|Super Class|
 *
 * ```javascript
 * function People(name)
 * {
 *     this._name = name;
 * }
 * People.prototype = {
 *     getName: function ()
 *     {
 *         return this._name;
 *     }
 * };
 * function Student(name)
 * {
 *     this._name = name;
 * }
 * inherits(Student, People);
 * var s = new Student('redhood');
 * s.getName(); // -> 'redhood'
 * ```
 */

var objCreate = Object.create;

function noop() {}

exports = function (Class, SuperClass)
{
    if (objCreate) return Class.prototype = objCreate(SuperClass.prototype);

    noop.prototype  = SuperClass.prototype;
    Class.prototype = new noop();
};