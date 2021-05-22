import foo from 'shared'

export default function Home() {
	return (
		<div>
			Imported modules from another workspace:
			<pre>{foo}</pre>
		</div>
	)
}
