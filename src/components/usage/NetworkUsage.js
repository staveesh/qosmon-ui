import '../../styles/components/NetworkUsage.css';

export default function NetworkUsage(props) {

    return (
        <div className="layout">
            {
                props.data.map((point, index) => {
                    return <div key={index} className="point">
                        <h3>{point.name}</h3>
                        <p>Upload : {point.tx} mb</p>
                        <p>Download : {point.rx} mb</p>
                    </div>
                })
            }
        </div>
    )
}
