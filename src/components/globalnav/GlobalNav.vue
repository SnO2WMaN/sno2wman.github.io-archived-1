<template>
	<nav class="globalnav">
		<div class="title-wrap">
			<h3 class="title">
				SnO<span>2</span>WMaN
			</h3>
		</div>
		<div class="menu-wrap">
			<ul class="menu">
				<li
					v-for="(node,name) in menu"
					:key="name"
					class="menu-node"
				>
					<nuxt-link
						class="link"
						:to="node.link"
					/>
					<div class="icon-wrap">
						<FontAwesomeIcon
							class="icon"
							:icon="node.icon"
							fixed-width
						/>
					</div>
					<p class="name">
						{{ name.toUpperCase() }}
					</p>
				</li>
			</ul>
		</div>
		<div class="social-wrap">
			<ul class="social">
				<li
					v-for="(node,name) in social"
					:key="name"
					class="social-node"
					:class="name"
				>
					<a
						class="link"
						target="_blank"
						:href="node.link"
					/>
					<div class="icon-wrap">
						<FontAwesomeIcon
							class="icon"
							:icon="node.icon"
							fixed-width
						/>
					</div>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
import {
	faBriefcase,
	faImage,
	faDonate,
	faPen,
	faEnvelope,
	faUserAlt
} from '@fortawesome/free-solid-svg-icons'
import {
	faTwitter,
	faGithub,
	faPatreon,
	faTumblr
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
	name: 'GlobalNav',
	components: { FontAwesomeIcon },
	data() {
		return {
			menu: {
				profile: { link: 'profile', icon: faUserAlt },
				work: { link: 'work', icon: faBriefcase },
				art: { link: 'art', icon: faImage },
				donate: { link: 'donate', icon: faDonate },
				blog: { link: 'blog', icon: faPen },
				contact: { link: 'contact', icon: faEnvelope }
			},
			social: {
				twitter: {
					link: 'https://twitter.com/SnO2WMaN',
					icon: faTwitter
				},
				github: { link: 'https://github.com/SnO2WMaN', icon: faGithub },
				patreon: {
					link: 'https://www.patreon.com/SnO2WMaN',
					icon: faPatreon
				},
				tumblr: {
					link: 'https://www.tumblr.com/blog/sno2wman',
					icon: faTumblr
				}
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.globalnav {
	$bg: hsl(192, 15%, 95%);
	$text: hsl(195, 15%, 22%);
	$accent: hsl(195, 45%, 56%);
	width: 320px;
	background: $bg;
	box-shadow: 0 1px 3px rgba(black, 0.2);
	user-select: none;
	& > .title-wrap {
		width: 100%;
		text-align: center;
		padding: 2rem 0;
		& > .title {
			font-family: 'Press Start 2P', monospace;
			font-size: 1.5rem;
			letter-spacing: 0.1em;
			color: $text;
			line-height: 1em;
			& > span {
				color: $accent;
			}
		}
	}
	& > .menu-wrap {
		& > .menu {
			display: flex;
			flex-wrap: wrap;
			& > .menu-node {
				width: 50%;
				height: 3rem;
				padding: 0 1.25rem;
				display: flex;
				align-items: center;
				position: relative;
				cursor: pointer;
				& > .link {
					position: absolute;
					z-index: 1;
					size: 100%;
					left: 0;
					top: 0;
				}
				& > .icon-wrap {
					color: $text;
					margin-right: 1rem;
					font-size: 0.75rem;
					display: flex;
					align-content: center;
					justify-content: center;
				}
				& > .name {
					color: $text;
					font-family: 'Poppins', sans-serif;
					font-weight: 600;
					font-size: 0.75rem;
					letter-spacing: 0.1rem;
				}
				&:hover {
					background-color: rgba($text, 0.1);
				}
			}
		}
	}
	& > .social-wrap {
		display: flex;
		justify-content: center;
		width: 100%;
		& > .social {
			display: flex;
			width: 100%;
			& > .social-node {
				width: 100%;
				height: 3rem;
				display: flex;
				align-items: center;
				justify-content: center;
				background: $text;
				transition: 0.125s background-color ease;
				position: relative;
				@each $social,
					$color
						in (
							twitter: #1da1f2,
							tumblr: #35465c,
							patreon: #f96854,
							github: #4078c0
						)
				{
					&.#{$social} {
						&:hover {
							background-color: $color;
						}
					}
				}
				& > .link {
					position: absolute;
					z-index: 1;
					size: 100%;
					left: 0;
					top: 0;
				}
				& > .icon-wrap {
					display: flex;
					align-items: center;
					justify-content: center;
					color: white;
					font-size: 0.9rem;
				}
			}
		}
	}
}
</style>
