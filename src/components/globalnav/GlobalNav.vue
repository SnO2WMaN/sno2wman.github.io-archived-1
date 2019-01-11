<template>
	<nav class="globalnav-container">
		<Transition
			name="globalnav"
			:duration="{ enter:700, leave: 800 }"
		>
			<div
				v-if="open"
				class="globalnav"
			>
				<div class="bg">
					<div class="cover" />
					<div class="cover" />
					<div class="cover" />
				</div>
				<div class="title-wrap">
					<nuxt-link
						to="/"
						class="link"
					/>
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
			</div>
		</Transition>
		<div
			class="toggle"
			@click="open = !open"
		>
			<div
				class="slider"
				:class="{on:open}"
			/>
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
			open: false,
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
$bg: hsl(192, 15%, 95%);
$text: hsl(195, 15%, 22%);
$accent: hsl(195, 45%, 56%);
$socials: (
	twitter: #1da1f2,
	tumblr: #35465c,
	patreon: #f96854,
	github: #4078c0
);

.globalnav-container {
	width: 320px;
	user-select: none;
	position: relative;
	& > .toggle {
		$wide: metallic(1);
		position: fixed;
		bottom: 5%;
		left: 0;
		right: 0;
		margin: 0 auto;
		$size: 2.5rem;
		width: ($size * $wide);
		height: $size;
		border-radius: $size;
		border: 1px solid $text;
		overflow: hidden;
		& > .slider {
			position: absolute;
			top: 0;
			left: 0;
			size: $size;
			&:before {
				content: '';
				position: absolute 0;
				size: (100% / metallic(1));
				background: $text;
				border-radius: 50%;
				margin: auto;
			}
			transition: 0.25s transform cubic-bezier(0.645, 0.045, 0.355, 1);
			&.on {
				transform: translateX(100% * ($wide - 1));
			}
		}
	}
	& > .globalnav {
		position: relative;
		& > .bg {
			position: absolute;
			size: 100%;
			top: 0;
			left: 0;
			box-shadow: 0 1px 3px rgba(black, 0.2);
			& > .cover {
				position: absolute;
				size: 100%;
				left: 0;
				top: 0;
				transform-origin: bottom;
				&:nth-of-type(1) {
					background: $accent;
				}
				&:nth-of-type(2) {
					background: $text;
				}
				&:nth-of-type(3) {
					background: $bg;
				}
			}
		}
		& > .title-wrap {
			width: 100%;
			text-align: center;
			padding: 2rem 0;
			position: relative;
			transition: 0.125s background-color ease;
			& > .link {
				position: absolute;
				z-index: 1;
				size: 100%;
				left: 0;
				top: 0;
			}
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
			&:hover {
				background-color: rgba($text, 0.1);
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
					transition: 0.125s background-color ease;
					& > .covers {
						position: absolute;
						size: 100%;
						left: 0;
						top: 0;
						overflow: hidden;
						& > .cover {
							position: absolute;
							size: 100%;
							left: 0;
							top: 0;
							transform-origin: left;
							animation-fill-mode: both;
							&:nth-of-type(1) {
								background: $accent;
							}
							&:nth-of-type(2) {
								background: $text;
							}
							&:nth-of-type(3) {
								background: $bg;
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
						line-height: 1em;
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
					@each $social, $color in $socials {
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
	@media screen and (max-width: 768px) {
		& > .globalnav {
			position: absolute;
			left: 0;
			top: 0;
			width: 100vw;
			height: 100vh;
			box-shadow: none;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			& > .title-wrap {
				width: (100% / metallic(1));
				padding: 1rem 0;
			}
			& > .menu-wrap {
				width: 100%;
				display: flex;
				justify-content: center;
				& > .menu {
					flex-direction: column;
					width: (100% / metallic(1));
					& > .menu-node {
						width: 100%;
						height: 2.5rem;
					}
				}
			}
			& > .social-wrap {
				width: 100%;
				margin-top: 1rem;
				& > .social {
					width: (100% / metallic(1));
					display: flex;
					justify-content: space-evenly;
					& > .social-node {
						position: relative;
						size: 2.5rem;
						background-color: transparent;
						&:hover {
							background-color: transparent !important;
						}
						&:before,
						&:after {
							content: '';
							position: absolute 0;
							margin: auto;
							border-radius: 50%;
							border: 1.25rem solid;
							border-color: $text;
						}
						&:before {
							z-index: 1;
						}
						&:after {
							z-index: 0;
						}
						@each $social, $color in $socials {
							&.#{$social} {
								&:after {
									border-color: $color;
								}
								&:hover {
									&:before {
										border-color: $color;
									}
								}
							}
						}
						& > .icon-wrap {
							z-index: 1;
						}
					}
				}
			}
			&.globalnav-enter-active {
				& > .bg {
					& > .cover {
						transition-property: transform;
						transition-timing-function: cubic-bezier(
							0.485,
							0.08,
							0.185,
							0.975
						);
						&:nth-of-type(1) {
							transition-delay: 0.1s;
							transition-duration: 0.5s;
						}
						&:nth-of-type(2) {
							transition-delay: 0.15s;
							transition-duration: 0.5s;
						}
						&:nth-of-type(3) {
							transition-delay: 0.2s;
							transition-duration: 0.5s;
						}
					}
				}
				& > .menu-wrap > .menu > .menu-node {
					& > .icon-wrap {
						transition: 0.2s;
						transition-property: transform;
					}
					& > .name {
						transition: 0.2s;
						transition-property: opacity, transform;
					}
					@for $i from 1 through 6 {
						&:nth-of-type(#{$i}) {
							& > .icon-wrap {
								transition-delay: 0.1s + ($i - 1) * 0.05s;
							}
							& > .name {
								transition-delay: 0.1s + ($i - 1) * 0.05s;
							}
						}
					}
				}
				& > .social-wrap > .social {
					& > .social-node {
						& > .icon-wrap {
							transition: 0.25s
								cubic-bezier(0.36, 1.535, 0.875, 1.095);
							transition-property: transform;
						}
						&:before,
						&:after {
							transition: 0.25s
								cubic-bezier(0.36, 1.535, 0.875, 1.095);
							transition-property: transform;
						}
						@for $i from 1 through 4 {
							&:nth-of-type(#{$i}) {
								& > .icon-wrap {
									transition-delay: ($i - 1) * 0.05s + 0.1s;
								}
								&:before {
									transition-delay: ($i - 1) * 0.05s + 0.05s;
								}
								&:after {
									transition-delay: ($i - 1) * 0.05s;
								}
							}
						}
					}
				}
			}
			&.globalnav-leave-active {
				& > .bg {
					& > .cover {
						transition-property: transform;
						transition-timing-function: cubic-bezier(
							0.99,
							0.095,
							0.625,
							0.875
						);
						&:nth-of-type(1) {
							transition-delay: 0.2s;
							transition-duration: 0.6s;
						}
						&:nth-of-type(2) {
							transition-delay: 0.15s;
							transition-duration: 0.6s;
						}
						&:nth-of-type(3) {
							transition-delay: 0.1s;
							transition-duration: 0.6s;
						}
					}
				}
				& > .menu-wrap > .menu > .menu-node {
					& > .icon-wrap {
						transition: 0.2s;
						transition-property: transform;
					}
					& > .name {
						transition: 0.2s;
						transition-property: opacity, transform;
					}
					@for $i from 1 through 6 {
						&:nth-of-type(#{$i}) {
							& > .icon-wrap {
								transition-delay: 0.1s + ($i - 1) * 0.05s;
							}
							& > .name {
								transition-delay: 0.1s + ($i - 1) * 0.05s;
							}
						}
					}
				}
				& > .social-wrap > .social {
					& > .social-node {
						& > .icon-wrap {
							transition: 0.25s
								cubic-bezier(0.36, 1.535, 0.875, 1.095);
							transition-property: transform;
						}
						&:before,
						&:after {
							transition: 0.25s
								cubic-bezier(0.36, 1.535, 0.875, 1.095);
							transition-property: border-width;
						}
						@for $i from 1 through 4 {
							&:nth-of-type(#{$i}) {
								& > .icon-wrap {
									transition-delay: ($i - 1) * 0.05s;
								}
								&:before {
									transition-delay: ($i - 1) * 0.05s + 0.1s;
								}
								&:after {
									transition-delay: ($i - 1) * 0.05s + 0.05s;
								}
							}
						}
					}
				}
			}
			&.globalnav-enter,
			&.globalnav-leave-to {
				& > .bg {
					& > .cover {
						transform: scaleY(0);
					}
				}
			}
			&.globalnav-enter {
				& > .social-wrap > .social > .social-node {
					& > .icon-wrap {
						transform: scale(0);
					}
					&:before,
					&:after {
						transform: scale(0);
					}
				}
				& > .menu-wrap > .menu > .menu-node {
					& > .icon-wrap {
						transform: scale(0);
					}
					& > .name {
						opacity: 0;
						transform: translateY(100%);
					}
				}
			}
			&.globalnav-leave-to {
				& > .social-wrap > .social > .social-node {
					& > .icon-wrap {
						transform: scale(0);
					}
					&:before,
					&:after {
						border-width: 0;
					}
				}
				& > .menu-wrap > .menu > .menu-node {
					& > .icon-wrap {
						transform: scale(0);
					}
					& > .name {
						opacity: 0;
						transform: translateY(100%);
					}
				}
			}
		}
	}
}
</style>
