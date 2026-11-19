import { Fragment } from 'react'

function FeatureSection({ id, image, alt, label, title, description }) {
    return (
        <section className={`landing-feature landing-feature-${id}`}>
            <div className='landing-feature-inner'>
                <img
                    className='landing-feature-img'
                    src={image.src}
                    srcSet={image.srcSet}
                    alt={alt}
                />
                <div className='landing-feature-text'>
                    <span className='landing-feature-label'>{label}</span>
                    <h2>
                        {title.map((line, index) => (
                            <Fragment key={line}>
                                {index > 0 && ' '}
                                {index > 0 && <br className='landing-br'/>}
                                {line}
                            </Fragment>
                        ))}
                    </h2>
                    <p>
                        {description.map((line, index) => (
                            <Fragment key={line}>
                                {index > 0 && <br/>}
                                {line}
                            </Fragment>
                        ))}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default FeatureSection