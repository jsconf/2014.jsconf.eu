> ##### Sebastian Markbåge
>   React / TC-39 / Facebook

I'm Sebastian, that thing there is my last name.

I live in California now, but, um, it's actually really nice to be back in Europe where Umlauds and accents are normal occurrences.
Sorry about voice, I think I'm allergic for bad APIs, that's why I'm like this.
So I work for Facebook now, the React team. I'm not an evangelist, I just code stuff, I'm just some dude.
 I also represent Facebook on TC 39 on standards committee on ECMAScript.
Don't worry, the bad parts are not mine, they're someone else's.

> ##### What's your favorite library?
>   Do you use it in all your JavaScript code?

I guess a lot of people here have a favorite library.
You there, what's your favorite library? nothing? React? that's a good call.
(Laughing) do you guys use libraries for everything, like the same library, like utility library, like underscore in how many people use underscore?  Cool.
JQuery?  Something like Angular High Level YUI?  Oooo ...
sorry, guys (Laughing)

Well, this is the great part about JavaScript, our community, if you look platforms like iOS, or Android or .Net that are proprietary, basically everyone tells you to do whatever the platform owner tells you that's right to do.
There's a stock secret black box you can't touch, everyone tells you you can't do better than they did, which is not true, let's be honest, it's not true in the JavaScript community.

We have a vibrant community of framework, we have discussion and fights about how many package managers we need manage all of our libraries, I think a lot of them are called NPM actually.
But do we really need this many ways to itterate on an Array?



How many ways do we need to access DOM attributes.
Do you even know all the concepts in Angular?
You know all the APIs in Ember data (I dont'), do you know how many ways to filter an array just in underscore?
Is it same in lodash? I think it's the same in lodash depending on which version you use and what you opt in to.
Do you even know all APIs in the standard JavaScript library?  What about ES6? 
Job recruiters and job descriptions are looking for experience with specific libraries, and if you know the same concept under different name, you're actually not good enough, because like you're not going to get ramped up quick enough before the company pivots, right.
It's starting to get a little bit annoying with all this proliferation, but, of course, you have a solution for this, you created your own library and now there's only one thing you have to learn.
It's probably super easy, solves all the edge cases and all the names are super easy for you to understand.

> ##### *facepalm*

How streamlined?

> ##### Learning JS is hard
>   working with JS is hard

JavaScript these days is really hard to learn.
Imagine this is like the first day and you get dropped into the code based complicated weapon App, in the middle of the web App, first day you have no idea how it works how many calls in to JavaScript libraries do you see that you've never seen before.
Imagine this is the life of thousands of your colleagues.

> ##### _.each([], fn)
> #####      is
> ##### [].forEach(fn)
> #####      ?

We had our own core libraries at Facebook as well.
One of the most common questions we had was so which Facebook specific module corresponds to this underscore or JQue arey function? 

> ##### Your Library is Fat
>   The accumulated surface area is too wide.

It's not that the library is too big, the library is pretty cool.
It doesn't matter if there's too many bytes, there's way to optimize and filter those, it's actually total amount of APIs that you have to learn to be productive in this industry.
That's really difficult these days.
And I don't think this is inherent to a diverse ecosystem.

> ##### Diet

I don't think it's inherent to programming in general.
I think I found a process that can help us minimize this problem.

First of all, listen to slow moving standards organizations.
Then write some spaghetti code.
Never abstract until it actually causes bugs.
Once it does cause a bug, add an abstraction but remove as as much surface area as you add to it.

>   1) Slow moving [standards committees].
>
>   2) Spaghetti code.
>
>   3) Almost never add sugar.
>
>   4) Burn as much as you add.

This doesn't sound like best practices at all, and no one wants to listen to slow moving standards orgs.
Let me get back to that a little bit later.

> ##### IE 2005
>   The Mad Max era of web development.

First, some history.
This is back to 2005, late 2005.
It was an interesting era for the web, it was before Internet Explorer 7, JavaScript update for 6 years, ES4 was being drafted, it was going to go into failure.
But minimal JavaScript, the line of library we had, the community had enough, we started to take things into our own hands, and this was an era where all the libraries started to see proliferation.

> ##### Function.prototype.bind

A lot of them were like prototype, based JS, those two heavily inspired Moo tools, which I kind of worked on a little bit.
A lot of those bad things were my fault.

> ##### $.ajax
> ##### _.each

But, of course libraries couldn't agree on a standard way of extending prototypes and having global name space so the best practice became like jQuery and underscore because they had their owne own separate name space.

> ##### Function.prototype.bind (again)

Then ES5 came along and it became popular to patch prototypes again, this time it's called polyfills.
A lot of those polyfills naturally replaced prototype and Moo tools because they were sharing the same name space.
But, the library in their own namespace, like underscore and jQuery lived on, and [are still/instill?] best practice.

> ##### Abstraction Layers Are Empowering

They actually had better APIs at the time because they were better documented and it was easier to learn because there was no standard that you can rely on.
And the rational that they still live on it's empowering to have an abstraction on top of the native features, because you can tweak performance, fix things in the specs which are a little annoying, without relying on a standards body to fix it for you.
Even TC 39 for JavaScript would even argue if you're not quite happy with this, you should just use your own standards library and build something on top of the standards.

> ##### But... which one?

But which one do we use?  There's at least two ways to do it now, there's the standard way, and the library way, and there's multiple libraries, we asked ourselves because we got this question a lot, should we adopt an API of a popular library like underscore or maybe lodash, but which one of them, and which version and is this going to be maintained. Do we even control the source?  Is it community driven, or is it controlled by one person?  Do we require this library from all of our source, or do we decouple it with some other dependency.

> ##### Why JavaScript [7:36]

So, let's take a minute to look at why we actually use JavaScript to begin with.
It's not best language in the world, whatever your favorite style is, there's at least one better language out there that will compile down to JavaScript.
We can just use that instead, right?


>   Because
> ##### JavaScript is ubiquitous

Well, we use JavaScript because it's ubiquitous, it's something that people could agree on.
This is why general purpose programming languages keep winning out against DSLs and custom languages.

> ##### Diverging libraries are undermining what makes JavaScript great

And by introducing divergence in the library community, we're actually undermining what JavaScript is great.

> ##### ES6 Polyfills and transpilers

So back at Facebook we started building source trance filers for ES6 features, we invested a lot in ES6, we became very early adopters of the class syntax throughout our entire code base, we joined TC 39 to start working on ES7.

> ##### Slow and inconsistent native implementations
> ##### :(

There are some problems with this technique though, there's some native functions that are slower than the reimplementation of them, loadash shows this over and over again.

> ##### Just monkey patch it
>   It's what makes JavaScript upgradable

It's easy to solve, just monkey patch it, just ovewrite a native version with one that's faster, this is actually one of the strengths of JavaScript that you can actually do this.
Sometimes, don't tell anyone, but you can actually use Shams as well that are not quite compatible just to get the extra little performance boost, just make sure you're continuously try to follow the standards as it's moving along and also try to not expose dependencies on non‑standard behavior.

> ##### Polyfilling compatibility problems

There's a lot of compatibility problems with just relying on polyfills.
In the early days of a spec, the spec changes a lot, you basically have to live with it as a library rather than a final draft of a spec, you continuously upgrade, you can really only have one version in one realm at a time, we have a lot of solutions to solve this, another problem is that you might have to load like a huge polyfill on an initial page load instead of doing the modular loading.

And all of this stuff is really difficult to get right, but we, and a lot of our people are trying to build Open Source tooling, to support your environment or stack to actually enable you do this.

> ##### One JavaScript
>   No Bikeshedding

And this is all hard work, but it allows us to have a very simple story, at Facebook, we use JavaScript's standards library.
There's one way to do things, and it's the standard way.
And it's it avoids a very simple problem.
It avoids bike shedding, bike shedding is the biggest waste of time of all.
We leave that to standard mailing lists.

>   "Authority is best applied on the simplest and least important decisions."
>
>     Not the most important
>
>           - me

It reminds me the least intuitive lessons I learned from a large organization: top‑down authority is best used on the very least important decisions, not the most important decisions.
For example I really recommend you enforce a strict and comprehensive style guide just because it avoids this discussion on every of pull request or every diff, which style you're going to use and every person isn't going to have to fight to get their style.

> ##### I needs my pluck(arr, 'name')!

But you might be asking yourself, JavaScript standard library doesn't have all features of my library, so what do I replace this with?

> ##### arr.map(x => x.name)

Well, often the answer is just write some more boilerplate code.

> ##### Make your own stupid filter function
>   Why libraries are stupid

It'll take you a few seconds longer, you don't take on dependency.
The person coming to fix your code does haven't to know about your obscure function and to pointing out their version with the same or different names that someone else thought was better, and better looking.
This can be really annoying to have all this repetitive code that looks ugly when we all want beautiful code, right.

>   "This process fundamentally has no end, ever.
>
>    We are simply never going to realize a state of software nirvana
>
>    where everything is supremely satisfying.
>
>    That's an important emotional realization."
>
>      - Mark Slee

Except, this process fundamentally has no end, ever.
We're simply never going to realize state of software nirvana where everything is supremely satisfying.
And that's an important emotional realization.
This was an early quote from an early Facebooker, but to put it another way, you're not going to find a perfect library API, you have good looking code now will look bad in a year, and you or someone else will have to go upgrade it.
You might not remember what abstraction you found that was cool, today.


> ##### Patterns Instead of Frameworks [12:17]

However, it's not all gloomy.
You write your code a little differently, and learn new patterns that allow you to structure your code a different way that achieve your goal but it's more precise than using plain JavaScript functions.
 ‑‑ Now, learning these patterns is quite difficult, and this is definitely a learning curve, but that makes you a better programmer in general.
Large frameworks they usually have an API for every kind of use case, and you can just search for that API, like ask for it on stack overflow and you can find a link to it.
When you learn patterns you have to read a book or tutorial or find different ways to express the same thing.
It's a different way to search for things, but, essentially it's the same problem.
It's just a slightly different solution.
And, if you structure a code in a way that uses patterns, instead of black box libraries, it's much easier for the next person to read your code; to actually understand what's going on.
And this is the most important lesson I've learned at Facebook:

> ##### No Abstraction > Wrong Abstraction [13:25]

It's much easier to recover from no abstraction than the wrong abstraction.

So, this kind of says a spaghetti code can be beter than a structured code, this is very counterintuitive, to a lot of modern programmers at least.
It's that the structure abstraction adds overhead to what every new coder needs to learn just to get up to speed with your code base.
But, you know, like, one little abstraction can't hurt...

> ##### Abstractions Spread

...but abstractions tend to spread, because technology is just a layer of abstractions, one on top of the other, and everything you have on top of your abstraction will need the be unwound.
You have to unwind every layer with a total and complete understanding of the intricacies of that system to get back to the original layer and then rebuild from there.
And, that means that it can actually be more ‑‑ a lot easier to upgrade verbose, repetitive and explicit code than it is to upgrade an abstraction.
Now I'm not saying like bad code, spaghetti code, is better.
It's really like Fettuccine code.

> ##### Fettuccine Code [14:38]
>   Few abstractions.
>
>   Lots of repetition.


Have you ever lived with like a large app that was built on the wrong framework?
And you tried to upgrade it but you never could, because you could never understand how the underlying framework worked.
Or, you had an existing App that was just written in haste, it was all spaghetti code, maybe it was good spaghetti code, maybe it was Fettuccine code.
A lot of abstractions lots of repetition.
Which one was easier to upgrade? and which one left you with more reusable code?

Abstraction comes with a significant cost and significant risk, so it's better to under-abstract to begin with and once you have a nice Fettuccine code base...


> ##### Find Repetition [15:23]
>   Only fix it if it leads to bugs

...start finding repeated patterns, if the pattern doesn't lead to bugs, don't fix it.
It might look ugly but it's not hurting anyone.
Try to generalize it, and you only risk adding bugs in the generalization.
It only adds surface area to [for] everyone.
But once it starts causing bugs then it becomes a problem because it's repetition and some algorithms can be difficult to get right and then it starts causing bugs then you generalize.

> ##### Generalize
>   Make it worth it's weight

You create an abstraction, but make sure the abstraction can be used for wide variety of use cases because it has to make it worth it's weight.
It might even be subject for standardtion if it's general enough.
And this is where a slow moving standards org can actually help you.
If it's general enough, and useful enough, it will be accepted as a standard, maybe it will be accepted as a draft and you can sort of continue from that.
But if it's not, then maybe it's not actually worth the weight it's adding, maybe you need to rethink or prove its value.

> ##### DOM

Now let's talk about the DOM.
There are apparently 25 methods to work with attributes alone, you can also access attributes through properties.

> ##### -jQuery-


That's still no reason to use a jQuery, the browser inconsistencies could be poly filled and the rest is just basically adding some sugar.
It's not solving the actual structural problem and the complexities of managing a DOM, the living DOM, and that thing is the think that leads to bugs.

> ##### Angular and Ember

  Solves bugs and productivity problems

Now Angular and Ember, they tried to address this by adding change tracking and data binding libraries on top of the DOM.
Now you don't have to manage the DOM directly and this actually solves bugs.
This is a legitimate use-case for abstraction.
In theory web components and similar efforts can actually work on standardizing these patterns and then there's one thing you have to learn and it's this data mining, web components world.

> ##### Remove As Much Complexity As You Add [17:30]
>   Reclaim surface area for the next problem
>
>     (e.g. domain specific problems)

Except, they don't actually remove as much as they add.
The surface area of these frameworks, these paradigms, it's huge, there's a lot of things you have to learn.
Learning how to use web components in a fully structured way, with all the data binding and the intricacies of that is still huge.
And that continues to be the case even when it's standardized.
But, with this paradigm it's all necessary.
And that's what tends to happen when you keep building straight on top of existing ideas.

>   "Facebook: Rethink established best practices™" - Ben Alman

So, sometimes just have to rethink the whole stack.
Come up with a smaller surface area.
So we thought, mutation is actually hard part of the DOM so what we could just throw away the DOM and recreate the whole of the document like a page reload.

> ##### React [18:18]

So we invented a library called React.
We are not trying to diverge from standards like web components with this, we just think that the functional approach taken by React means we can drop so much more of the surface area.
And all we're trying to do is make it a lot easier for you to reason about code, without you having to think about a lot of surface area, because the remaining surface area is things that you can spend time thinking about around your domain specific world.

So this is the API of React .
You expose a function that gets the initial state of component, a render function that you can read from the states.
And a call back that sets state.
You'll notice that the set state is actually the only API in to React.
This is really the only API you have to understand in React.
We also have this syntax sugar, basically because braces are difficult to read.
It looks like templates, but it's not really templates, there's no repeaters.
There's no special directives, there's no special conditionals, it's just plain old JavaScript.

Now, React's internals are pretty complicated.
The diffing algorithm to update the DOM can be fairly complicated.
But the surface area that you have to face as a developer to know and understand what's going on in React is very simple. There's no new APIs, it's just a simple concept.

> ##### Enough with the sales pitch, Sebastian
>   What's the downside?

You can build an incredibly complex App like this, we did and up until this point it sounds pretty good, right.
But nothing is free.
So what are we giving up?

> ##### -Implicitness-


Implicitness.
React favors explicit APIs, and for you to write out your code as explicitly as possible over built‑in Magic.
For example in many cases we get request for implicit bubbling of events because it's tedious to pass a call back around or some extra properties around, well, turns out this is a terrible idea.

> ##### Cool abstraction, bro
>   Are you sure it solves more problems than it causes?

It's really difficult to follow code that depends on implicit bubbling of events, because it means that if either side ever disappears, you don't know where it disappeared, let's say one caller disappears from your stack and later we realize that actually that led to a bug that we didn't anticipate, how do you find that?
Do you have to go through I have component and the history of every component or abstraction along the way to find where that happened?
And this is just one example.
If but it speaks to the idea that saving a little bit of typing is actually not a good reason enough for an abstraction.

> ##### Explicit -> Implicit
> #####      is easy
> ##### Implicit -> Explicit
> #####      is hard

It's much easier to recover from an explicit API by adding some sugar than to undo an explicit API.
And we take new abstractions in React very, very seriously, while you have to live with a little bit of boilerplate in certain cases, you know that you and your archetecture will probably understand and be able torefactor your code in the future much easier.

> ##### React.createClass
>   Oops

We make mistakes too, of course.

Um, if you're used to React you might have noticed that's not actually how you write React right now because we built our own class extraction.
It was very tempting and convenient. We could add special [???] to it.
But in the next version of React we're deprecate that and going all in on the ES6 classes.

> ##### Standard Features are decoupling between libraries

It's not an extended verse of ES6 classes just ES6 classes, because it's not a one to one mapping it means a little bit more boilerplate in some cases but it means that since we're removing proprietary features from the library, you can use whatever abstraction you want.

Preferably we'll just use standard JavaScripts so we don't add extra weight to our industry.
But, if you railly do want to use a third party library, since we provide the standard class system it means that we can accept any kind of third party class system as well.
Because the standard represents an intermediate representation that can be shared across libraries, this causes de‑couping as a side effect.

> ##### Remove Features
>   When there are any alternatives

Now think about that for a minute, React already has a small surface area, but we're actively removing proprietary features from the framework.

>   "We are not paid to use every feature of the language.
>
>    We are paid to write reliable and simple software." - Douglas Crockford

Now, just because you should mostly use standard language, it doesn't mean you have to use all of it.
So, JavaScript already has a huge surface area and if you want to keep adding more stuff to it, then we have to remove something, because otherwise it will just keep growing and our industry will run out of head space, or whatever.

But this is already being done through linters, strict mode, VMs only optimize certain patterns.
So, the next thing I want to work on is basically just formalizing this step of the process.
How do we remove features from existing language?
I mean they'll never be removed from the web, because you can't remove things from the web, but it can be removed from our industry's mental surface area.

> ##### JS on a Diet
>   1) Slow moving standards.     Use polyfills instead of libs.
>
>   2) Spaghetti code.            Explicit repetitive code.
>
>   3) Almost never add sugar.    Only abstract to solve bugs.
>
>   4) Burn as much as you add.   Rethink the stack and purge.

So, let's put JS on a diet.
Use polyfills instead of libraries, write explicit and repetitive code, only abstract to actually solve bugs, not because it looks better.
And then rethink the stack and purge.
And then start over again.

Thank you.
